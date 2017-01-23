import {
  Mesh,
  ExtrudeBufferGeometry,
  ExtrudeGeometry
} from 'three';

import {MeshComponent} from '../../core/MeshComponent';

class Extrude extends MeshComponent {
  static defaults = {
    ...MeshComponent.defaults,
    geometry: {
      shapes: [],
      options: {}
    }
  };

  static instructions = {
    ...MeshComponent.instructions,
    geometry: ['shapes', 'options']
  };

  constructor(params = {}) {
    super(params, Extrude.defaults, Extrude.instructions);

    if (params.build) {
      this.build(params);
      super.wrap();
    }
  }

  build(params = this.params) {
    const {geometry, material} = this.applyBridge({
      geometry: this.buildGeometry(params),
      material: params.material
    });

    return this.applyBridge({mesh: new Mesh(geometry, material)}).mesh;
  }

  buildGeometry(params = {}) {
    const GConstruct = params.buffer && !params.softbody ? ExtrudeBufferGeometry : ExtrudeGeometry;

    return new GConstruct(
      params.geometry.shapes,
      params.geometry.options
    );
  }

  set g_shapes(val) {
    this._native.geometry = this.buildGeometry(this.updateParams({geometry: {shapes: val}}));
  }

  get g_shapes() {
    return this._native.geometry.parameters.shapes;
  }

  set g_options(val) {
    this._native.geometry = this.buildGeometry(this.updateParams({geometry: {options: val}}));
  }

  get g_options() {
    return this._native.geometry.parameters.options;
  }
}

export {
  Extrude
};
