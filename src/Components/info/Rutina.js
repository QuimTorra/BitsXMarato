import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Dieta(props) {
  return (
    <ScrollView>
      {
        <View style={styles.dieta}>
          <Text style={styles.light}>4 Dies Setmanals</Text>
          <Text style={styles.bold}>Dilluns:</Text>
          <Text style={styles.light}>3-4 series de 8-12 repes</Text>
          <Text>Tors, Resistència</Text>
          <Text>- Press banca</Text>
          <Text>- Rem amb barra</Text>
          <Text>- Press hombros</Text>
          <Text>- Curl de bíceps</Text>
          <Text>- Extensió de tríceps</Text>
          <Text style={styles.bold}>Dimarts:</Text>
          <Text style={styles.light}>3-4 series de 8-12 repes</Text>
          <Text>Cames, Resistència</Text>
          <Text>- Sentadilla amb barra</Text>
          <Text>- Pes mort convencional</Text>
          <Text>- Prensa inclinada</Text>
          <Text>- Curl femoral</Text>
          <Text style={styles.bold}>Dijous:</Text>
          <Text style={styles.light}>3-4 series de 6-8 repes</Text>
          <Text>Tors, Força</Text>
          <Text>- Press banca</Text>
          <Text>- Rem amb barra</Text>
          <Text>- Press hombros</Text>
          <Text>- Curl de bíceps</Text>
          <Text>- Extensió de tríceps</Text>
          <Text style={styles.bold}>Divendres:</Text>
          <Text style={styles.light}>3-4 series de 6-8 repes</Text>
          <Text>Cames, Força</Text>
          <Text>- Sentadilla amb barra</Text>
          <Text>- Pes mort convencional</Text>
          <Text>- Prensa inclinada</Text>
          <Text>- Curl femoral</Text>
          <Text style={styles.bold}>
            15 minuts de cinta o bici estàtica després de cada entrenament
          </Text>
        </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dieta: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bold: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 15,
  },
  light: {
    fontWeight: "100",
  },
});
