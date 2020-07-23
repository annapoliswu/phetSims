// Copyright 2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Zihan Wu
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import GlasswareSimScreen from './glassware-sim/GlasswareSimScreen.js';
import glasswareSimStrings from './glasswareSimStrings.js';

const glasswareSimTitleString = glasswareSimStrings[ 'glassware-sim' ].title;

const simOptions = {

  //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
  credits: {
    leadDesign: '',
    softwareDevelopment: '',
    team: '',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  }
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( glasswareSimTitleString, [
    new GlasswareSimScreen( Tandem.ROOT.createTandem( 'glasswareSimScreen' ) )
  ], simOptions );
  sim.start();
} );