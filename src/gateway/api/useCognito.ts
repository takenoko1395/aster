import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute } from 'amazon-cognito-identity-js'

export const useCognito = () => {
  const userPool = new CognitoUserPool({
    UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL,
    ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
  })

  const signUp = (email: string, password: string, userName?: string) => {
    const userAttribute = [new CognitoUserAttribute(
      { Name: 'email', Value: email },
    )]
    if (userName) {
      userAttribute.push(new CognitoUserAttribute(
        { Name: 'name', Value: userName },
      ))
    }

    userPool.signUp(email, password, userAttribute, [], (err, result) => {
      // 登録がエラーとなった場合の処理を実装
      if (err) {
        console.log(err)
        alert(JSON.stringify(err))
        return
      }
      // 登録が成功した場合の処理を実装（E-mailは未認証）
      if (result) {
        const cognitoUser = result.user
        console.log(cognitoUser)
      } else {
        alert('missing result')
        return
      }
    })
  }

  const confirm = (email: string, code: string) => {
    const userData = {
      Username: email,
      Pool: userPool,
    }

    new CognitoUser(userData).confirmRegistration(
      code,
      true,
      (err, result) => {
        // E-mail認証がエラーとなった場合の処理を実装
        if (err) {
          alert(JSON.stringify(err))
          return
        }
        // E-mail認証が成功した場合の処理を実装
        console.log(result)
      },
    )
  }

  const signIn = (email: string, password: string) => {
    const userData = {
      Username: email,
      Pool: userPool,
    }
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    new CognitoUser(userData).authenticateUser(authenticationDetails,
      {
        onSuccess: (result) => {
          // ログイン成功時の処理を実装する
          console.log('Login Success')
          console.log(result)
          console.log(
            'Access Token(jwtToken)=' + result.getAccessToken().getJwtToken(),
          )
          console.log('ID Token(jwtToken)=' + result.getIdToken().getJwtToken())
          console.log('Refresh Token=' + result.getRefreshToken().getToken())
          console.log(
            'username(congitoの一意ID)='
            + result.getAccessToken().decodePayload().username,
          )
        },
        onFailure: (err) => {
          // ログイン失敗時の処理を実装する
          alert(JSON.stringify(err))
        },
      },
    )
  }

  return { signUp, confirm, signIn }
}
