import { useNavigate } from 'react-router-dom';
export default function FootText() {
    const navigate = useNavigate();
    return (
        <div className="mt-4 block lg:flex justify-center">
            <div>
                <span className="text-gray-400 ">Phone : </span>
                <span className="text-gray-400 ">+1 317 926 8676</span>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <span className="text-gray-400 ">Email : </span>
                <button className="text-gray-400 " onClick={() => navigate('/home')}>
                    roberthenry0116@gmail.com
                </button>
            </div>
        </div>
    );
}
