const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_KEY,
});

const openai = new OpenAIApi(configuration);

async function fetchOpenAIResponse(text) {
  const { data } = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: text,
  });

  return data.choices[0].text;
}

module.exports = { fetchOpenAIResponse };
