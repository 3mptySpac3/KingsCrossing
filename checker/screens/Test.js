import Player from "../components/Players";
import Board from "../components/Board";
import { SafeAreaView } from "react-native-web";

export default function Test() {
    return (
        <SafeAreaView>
            <div className="App">
                <Player name="Player 1" color="red" />
                <Player name="Player 2" color="black" />
                <Board />
            </div>
        </SafeAreaView>
    );
}