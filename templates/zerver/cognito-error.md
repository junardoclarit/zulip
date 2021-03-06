You are using the **AWS Cognito auth backend**, but it is not properly
configured. Please check the following:

* You have added `{{ root_domain_uri }}/complete/cognito/` as the callback
URL in the App client settings in Cognito. You can setup AWS Cognito at
[AWS Cognito](https://console.aws.amazon.com/cognito/).

* You have set `{{ client_id_key_name }}` and `SOCIAL_AUTH_COGNITO_POOL_DOMAIN`
in `{{ settings_path }}` and
`social_auth_cognito_secret` in `{{ secrets_path }}` with the values
from your OAuth application.

* Navigate back to the login page and attempt the AWS Cognito auth flow again.