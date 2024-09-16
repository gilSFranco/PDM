import { Button } from "react-native";

const FeedButton = ({ isHungry, setIsHungry }) => {
    return (
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? 'Quero Cumeee, me alimente!' : 'Valeu Grandioso!'}
      />
    );
  };

export default FeedButton;