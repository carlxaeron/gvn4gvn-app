import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, Tabs } from "expo-router";
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Text, View } from "react-native";
import { Config } from "@/constants/Config";
import { ThemedText } from "@/components/ThemedText";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Stack>
    //   <Stack.Screen name="index" />
    // </Stack>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          headerTitle(props) {
            return <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <TabBarIcon name='person' color={Colors[colorScheme ?? 'light'].tabIconSelected} />
                <ThemedText type="title" style={{fontSize: 18, fontWeight: 'bold', color: Colors[colorScheme ?? 'light'].text}}>{Config.title}</ThemedText>
              </View>;
          },
          headerRight(props) {
            return <TabBarIcon name='notifications' style={{paddingRight: 10}} color={Colors[colorScheme ?? 'light'].tabIconSelected} />
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="missionaries"
        options={{
          title: 'Missionaries',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
