import { ThemeSelector } from "@/components/ThemeSelector";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function SettingsScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Settings</ThemedText>
            <ThemeSelector />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
