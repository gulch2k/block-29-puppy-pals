import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';

export default function SinglePlayer() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/SinglePlayer')}>
          Go to Single Player
        </button>
      );
    }