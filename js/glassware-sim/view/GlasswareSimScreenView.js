// Copyright 2020, University of Colorado Boulder

/**
 * @author Zihan Wu
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import MultiLineText from '../../../../scenery-phet/js/MultiLineText.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';

import GlasswareSimConstants from '../../common/GlasswareSimConstants.js';
import glasswareSim from '../../glasswareSim.js';
import GlasswareSimModel from '../model/GlasswareSimModel.js';

import Image from '../../../../scenery/js/nodes/Image.js';
//import Node from '../../../../scenery/js/nodes/Node.js';
//import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import beakerImage from '../../../images/beaker800ml.js';


const TITLE_FONT = new PhetFont( { size: 24, weight: 'bold' } );
const maxTextWidth = 175;


class GlasswareSimScreenView extends ScreenView {

  /**
   * @param {GlasswareSimModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    assert && assert( model instanceof GlasswareSimModel, 'invalid model' );
    assert && assert( tandem instanceof Tandem, 'invalid tandem' );

    super( {
      tandem: tandem
    } );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - GlasswareSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - GlasswareSimConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );

    const text = new MultiLineText( 'HELLO WORLD', {
      align: 'center',
      font: TITLE_FONT,
      maxWidth: maxTextWidth,
      tandem: tandem.createTandem( 'titleNode' )
    } );

    //add order
    this.addChild( resetAllButton );
    this.addChild( text );
    this.addChild( new Image( beakerImage, {
      centerX: 0,
      centerY: 0
    } ) );
  }

  /**
   * Resets the view.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the view.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

glasswareSim.register( 'GlasswareSimScreenView', GlasswareSimScreenView );
export default GlasswareSimScreenView;