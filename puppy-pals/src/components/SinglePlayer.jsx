import { useNavigate } from "react-router-dom";
import { fetchPlayers } from './API';
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayers(id);
        setPlayer(data);
      } catch (error) {
        console.error(`Error fetching player with ID ${id}:`, error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <button onClick={() => navigate("/SinglePlayer")}>
      View the single player
    </button>
  );
}
