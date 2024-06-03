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
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`/register`, { email, password });
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

export const createQuestion = async (question: any) => {
  try {
    const response = await axiosInstance.post(`/api/questions`, question);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pergunta:', error);
    throw error;
  }
};



