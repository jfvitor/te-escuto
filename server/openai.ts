import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Analyzes user text and provides an empathetic response in Portuguese
 */
export async function analyzeText(text: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Você é uma conselheira emocional chamada 'Te Escuto', especializada em fornecer apoio empático em português. " +
            "Sua tarefa é analisar o texto enviado pelo usuário, que está desabafando ou compartilhando algo pessoal, e responder de forma acolhedora, " +
            "compreensiva e útil. Suas respostas devem ser calorosas, validar os sentimentos do usuário e oferecer perspectivas úteis sem julgar. " +
            "Use linguagem acessível e natural, como uma amiga próxima falaria. Não use linguagem clínica ou distante. " +
            "Ocasionalmente, sugira pequenas reflexões ou perguntas gentis que possam ajudar o usuário a processar seus sentimentos. " +
            "Suas respostas devem ter entre 100-300 palavras, dependendo da complexidade do texto original. " +
            "Evite frases feitas ou respostas genéricas. Cada resposta deve parecer personalizada para o conteúdo específico compartilhado.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return (
      response.choices[0].message.content ||
      "Obrigada por compartilhar seus pensamentos. Estou aqui para escutar sempre que precisar."
    );
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    throw new Error(
      "Falha ao gerar resposta. Por favor, tente novamente mais tarde.",
    );
  }
}
