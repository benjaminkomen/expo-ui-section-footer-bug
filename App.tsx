import { StyleSheet, View } from 'react-native';
import { Form, Host, LabeledContent, Section, Text, TextField } from '@expo/ui/swift-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Host style={styles.host}>
        <Form>
          {/* BUG: Footer is NOT displayed when using title prop */}
          <Section
            title="Using title prop"
            footer={<Text>This footer is NOT visible (bug)</Text>}
          >
            <LabeledContent label="Field 1">
              <TextField defaultValue="Value 1" />
            </LabeledContent>
          </Section>

          {/* WORKAROUND: Footer IS displayed when using header prop */}
          <Section
            header={<Text>Using header prop</Text>}
            footer={<Text>This footer IS visible (workaround)</Text>}
          >
            <LabeledContent label="Field 2">
              <TextField defaultValue="Value 2" />
            </LabeledContent>
          </Section>
        </Form>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  host: {
    flex: 1,
  },
});
