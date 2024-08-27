import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Config } from "@/constants/Config";
import { Button, Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex: 1, rowGap: 10}}>
      <Image style={{ height: 400, width: '100%' }} source={require('@/assets/images/gvn4gvn/Home.png')} />
      <ThemedText type="title" style={{textAlign: 'center'}}>Join the community that's{'\n'} making a difference in the world</ThemedText>
      <ThemedText type="subtitle" style={{textAlign: 'center'}}>Our work is made possible by people like you who share our passion for the gospel</ThemedText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 30}}>
        <ThemedButton title="Get Involved" onPress={() => {}} />
        <ThemedButton type="normal" title="Learn More" onPress={() => {}} />
      </View>
    </View>
  );
}
