import boot from "./src/boot";
import Amplify, {Auth} from 'aws-amplify';
Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:938b407a-8ab7-441a-a97d-9e436f7fa2e7',
    userPoolId: 'us-east-1_E4VwWb8Bp',
    userPoolWebClientId: '70g5g51kacbcgdto0iuj92pv76',
    region: 'us-east-1'
  },
  Analytics: {
    AWSPinpoint: {
      region: 'us-east-1',
      appId: '51d51fc648944dc5bef405d3d8417a1d'
    }
  }
});
import {withAuthenticator} from 'aws-amplify-react-native';

const app = boot();

export default withAuthenticator(app);
