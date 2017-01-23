import {
  Mesh,
  SphereBufferGeometry,
  SphereGeometry
} from 'three';

import {MeshComponent} from '../../core/MeshComponent';

class Sphere extends MeshComponent {
  static defaults = {
    ...MeshComponent.defaults,
    geometry: {
      radius: 1,
      widthSegments: 8,
      heightSegments: 6
    }
  };

  static instructions = {
    ...MeshComponent.instructions,
    geometry: ['radius', 'widthSegments', 'heightSegments']
  };

  constructor(params = {}) {
    super(params, Sphere.defaults, Sphere.instructions);
  }

  build(params = this.params) {
    const {geometry, material} = this.applyBridge({
      geometry: this.buildGeometry(params),
      material: params.material
    });

    return this.applyBridge({mesh: new Mesh(geometry, material)}).mesh;
  }

  buildGeometry(params = {}) {
    const GConstruct = params.buffer && !params.softbody ? SphereBufferGeometry : SphereGeometry;

    const geometry = new GConstruct(
      params.geometry.radius,
      params.geometry.widthSegments,
      params.geometry.heightSegments
    );

    if (params.softbody) this.proccessSoftbodyGeometry(geometry);

    return geometry;
  }

  set g_radius(val) {
    this._native.geometry = this.buildGeometry(this.updateParams({geometry: {radius: val}}));
  }

  get g_radius() {
    return this._native.geometry.parameters.radius;
  }

  set g_widthSegments(val) {
    this._native.geometry = this.buildGeometry(this.updateParams({geometry: {widthSegments: val}}));
  }

  get g_widthSegments() {
    return this._native.geometry.parameters.widthSegments;
  }

  set g_heightSegments(val) {
    this._native.geometry = this.buildGeometry(this.updateParams({geometry: {widthSegments: val}}));
  }

  get g_heightSegments() {
    return this._native.geometry.parameters.widthSegments;
  }
}

export {
  Sphere
};
