import axiosInstance from './axiosInstance';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.get(`/${email}/${password}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [message, setMessage] = useState('');

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const user = await loginUser(email, password);
//     setMessage(`Bem-vindo, ${user.name}`);
//   } catch (error) {
//     setMessage('Falha no login. Verifique suas credenciais.');
//   }
// };


//onChange={(e) => setEmail(e.target.value)}
//onChange={(e) => setPassword(e.target.value)}

//</button> {message && <p>{message}</p>}
