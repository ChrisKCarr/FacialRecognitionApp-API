# Getting Started

The face-model-api is a backend api for the project [FacialRecognitionApp](https://github.com/ChrisKCarr/FacialRecognitionApp) with backend authentication and a PostgreSQL database, hosted on Heroku. Get response from Clarifai API and see it visualize. More on Clarifai's `face-detection` model can be found [here](https://www.clarifai.com/models/face-detection).

## Environment Variables

Create a `.env` file in the root of the project and add the Clarifai API Key. The value assigned for `API_KEY` below is fake and will not work. To create your own api key, [Sign Up](https://portal.clarifai.com/signup) for a Clarifai account and create an application. For more information visit Clarifi's [Quick Start Guide](https://docs.clarifai.com/getting-started/quick-start).

Assign your client's URL to `ORIGIN` to prevent `cross-domain` based attacks. Note that it is an _optional_ variable and can be skipped, without creating any extra modifications.

To run the project in development mode and connect to a local database, set `DEV` to `true`. Note that the variable assigned is a `string` and not a `boolean`.

```dotenv
API_KEY=3d20e9dea9a6f5a297ac3b1a
ORIGIN=http://localhost:3001
DEV=true
```

## Developing

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

```shell
git clone https://github.com/ChrisKCarr/FacialRecognitionApp-API
cd FacialRecognitionApp-API
npm install
```

You can now run the Express Server on your `localhost`.

```shell
npm start
```
