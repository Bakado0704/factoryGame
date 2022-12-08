import { Provider } from "react-redux";
import App from "./App";
import { store } from "./src/store/redux/store";


const activeId = useSelector((state) => state.activeBg.id);

const activeJob = JOB.filter((job) => activeId.includes(job.id));

console.log(activeJob);


export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}