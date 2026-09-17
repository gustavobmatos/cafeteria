import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
};

export default function CustomButton({title, onPress}: CustomButtonProps) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#c67c4e',
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  }
})