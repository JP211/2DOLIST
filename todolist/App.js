import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Header</Text>
        </View>

        <View>
          <Text>Body</Text>
        </View>

        <View>
          <Text>Footer</Text>
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
