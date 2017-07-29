import {
  MeshComponent, 
  MeshComponentParams
} from '../../core/MeshComponent';

import {
  Mesh,
  Loader,
} from 'three';

interface ImporterParams extends MeshComponentParams {

  /**
   * Loader.
   * Default to THREE.JSONLoader.
   */
  loader?: Loader;

  /**
   * Specific parser function.
   * Defaults is a geometry and material parser returning the native (Mesh) object.
   */
  parser?: Function;

  /**
   * The URL of the model to import.
   * Default is ''.
   */
  url?: string;

  /**
   * Will be called when load starts.
   * The default is a function with empty body.
   */
  onLoad?: Function;

  /**
   * Will be called while load progresses.
   * The default is a function with empty body.
   */
  onProgress?: Function;

  /**
   * Will be called while load faces an error.
   * The default is a function with empty body.
   */
  onError?: Function;

  /**
   * Set the base path or URL from which to load files. 
   * This can be useful if you are loading many files from the same directory.
   * Default is null.
   */
  texturePath?: string;

  /**
   * Whether to use a custom material.
   * Default is false.
   */
  useCustomMaterial?: boolean,

}

 export class Importer extends MeshComponent {

   /**
    * @constructor Creates an Importer
    * @param params parameters
    */
   constructor(params?: ImporterParams);

   /**
    * Build lifecycle creates a mesh using input params.
    * @param params 
    */
   build(params?: ImporterParams): Mesh;

}