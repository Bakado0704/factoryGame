import { FlatList, StyleSheet } from "react-native";
import { JOB } from "../../../data/data";
import ImageButton from "../../ui/ImageButton";

export interface Props {
  itemData: object;
};

const JobList = () => {
  const renderCategoryItem = (itemData) => {
    const {item, source} = itemData.item;

    const pressHandler = () => {}

    return (
      <ImageButton source={require(source)} onPress={pressHandler} style={styles.jobButton}/>
    );
  }

  return (
    <FlatList
      data={JOB}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
    />
  );
}

export default JobList;

const styles = StyleSheet.create({
  jobButton: {},
});
