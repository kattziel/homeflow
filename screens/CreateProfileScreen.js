import { Text, View, StyleSheet, Image} from 'react-native';
import Input from '../components/UI/Input';
import { useNavigation } from "@react-navigation/native";

function CreateProfileScreen() {
    const navigation = useNavigation();
    function moveForwardHandler(){
        navigation.navigate("AddFamilyMembersScreen")
    }
    return (
        <View>
            <View><Text>Create your profile</Text></View>
            <View>
               <Image></Image>
            </View>
            <View style={styles.inputsContainer}>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
            </View>
            <View style={styles.buttonsContainer}>
                <Button></Button>
                <Button></Button>
            </View>
        </View>
    )
}

export default CreateProfileScreen;

const styles = StyleSheet.create({

})