import axiosInstance from './axiosInstance';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const registerUser = async (user: any) => {
  try {
    const response = await axiosInstance.post(`/register`, { email: user.email, password: user.password });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer cadastro:', error);
    throw error;
  }
};

export const getAllQuestions = async () => {
  try {
    const response = await axiosInstance.get(`/api/questions`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter todas as perguntas:', error);
    throw error;
  }
};

export const getQuestionById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter a pergunta com id ${id}:`, error);
    throw error;
  }
};

// funcao para verificar a resposta da pergunta
export const checkAnswer = async (id: string, question: string, userAnswer: string) => {
  try {
    const response = await axiosInstance.post(`/api/questions/${id}/answer`, { question, userAnswer });
    return response.data;
  } catch (error) {
    console.error(`Erro ao verificar a resposta para a pergunta com id ${id}:`, error);
    throw error;
  }
};


export const getQuestion = async () => {
  try {
    const response = await axiosInstance.get(`/api/questions`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter pergunta:', error);
    throw error;
  }
};

export const generateAndSaveQuestion = async (user: any) => {
  try {
    const response = await axiosInstance.post(`/api/questions/generateAndSave`, user);
    // A pergunta gerada é retornada junto com a resposta
    const generatedQuestion = response.data;
    return generatedQuestion;
  } catch (error) {
    console.error('Erro ao gerar e salvar pergunta:', error);
    throw error;
  }
};

export const findUserById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao encontrar usuário com id ${id}:`, error);
    throw error;
  }
};

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/users/${email}/${password}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao encontrar usuário por email e senha:', error);
    throw error;
  }
};

export const findUserByPhone = async (phone: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/users/${phone}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao encontrar usuário com telefone ${phone}:`, error);
    throw error;
  }
};

export const submitAnswer = async (userAnswerDto: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/users/submit-answer`, userAnswerDto);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);
    throw error;
  }
};

export const saveUser = async (userAuthenticationDto: any) => {
  try {
    const response = await axiosInstance.post(`/api/v1/users/register`, userAuthenticationDto);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
    throw error;
  }
};