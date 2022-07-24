import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/welcome/reducer';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const greeting = useSelector((state) => state.greeting);
  const fetching = useSelector((state) => state.fetching);
  return (
    <div className="greeting">
      {!fetching && (<h1>{greeting}</h1>)}
      {fetching && (<h2>Fetching your personalized greeting</h2>)}
    </div>
  );
}

export default Greeting;
