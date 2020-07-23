// Copyright 2020, University of Colorado Boulder

/**
 * @author Zihan Wu
 */

import Screen from '../../../joist/js/Screen.js';
import GlasswareSimColors from '../common/GlasswareSimColors.js';
import glasswareSim from '../glasswareSim.js';
import GlasswareSimModel from './model/GlasswareSimModel.js';
import GlasswareSimScreenView from './view/GlasswareSimScreenView.js';

class GlasswareSimScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      backgroundColorProperty: GlasswareSimColors.SCREEN_VIEW_BACKGROUND,
      tandem: tandem
    };

    super(
      () => new GlasswareSimModel( tandem.createTandem( 'model' ) ),
      model => new GlasswareSimScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

glasswareSim.register( 'GlasswareSimScreen', GlasswareSimScreen );
export default GlasswareSimScreen;