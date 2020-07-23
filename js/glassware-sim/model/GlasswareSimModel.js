// Copyright 2020, University of Colorado Boulder

/**
 * @author Zihan Wu
 */

import Tandem from '../../../../tandem/js/Tandem.js';
import glasswareSim from '../../glasswareSim.js';

class GlasswareSimModel {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    assert && assert( tandem instanceof Tandem, 'invalid tandem' );
    //TODO
  }

  /**
   * Resets the model.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the model.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

glasswareSim.register( 'GlasswareSimModel', GlasswareSimModel );
export default GlasswareSimModel;