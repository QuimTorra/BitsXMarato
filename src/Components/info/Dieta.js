import { Text, View, StyleSheet } from "react-native";

export default function Dieta(props) {
  return (
    <>
      {props.sexe == "home" && props.weight < 90 && (
        <View style={styles.dieta}>
          <Text style={styles.light}>Calories: ~2000</Text>
          <Text style={styles.bold}>Esmorzar</Text>
          <Text>Truita amb salmó</Text>
          <Text>Dues torrades de pa integral</Text>
          <Text style={styles.bold}>Dinar:</Text>
          <Text>Amanida d'alvocat, tonyina, col, pastanaga i tomàquet</Text>
          <Text>Postre: Nabius</Text>
          <Text style={styles.bold}>Snack:</Text>
          <Text>Barquetes de cogombre amb formatge feta</Text>
          <Text style={styles.bold}>Sopar:</Text>
          <Text>Burrito de pollastre amb amanida Caprese</Text>
          <Text>Postre: Plàtan</Text>
        </View>
      )}
      {props.sexe == "home" && props.weight >= 90 && (
        <View style={styles.dieta}>
          <Text style={styles.light}>Calories: ~2400</Text>
          <Text style={styles.bold}>Esmorzar</Text>
          <Text>Dues torrades de pa integral amb dos ous bullits.</Text>
          <Text style={styles.bold}>Dinar:</Text>
          <Text>Amanida d'alvocat i tonyina</Text>
          <Text>Postre: Macedònia amb iogurt natural</Text>
          <Text style={styles.bold}>Snack:</Text>
          <Text>Batut de llima, vainilla i llet</Text>
          <Text>Grapat d'anous</Text>
          <Text style={styles.bold}>Sopar:</Text>
          <Text>Entrepà de pa de sègol de pollastre, guacamole i enciam</Text>
          <Text>Postre: Plàtan i nabius</Text>
        </View>
      )}
      {props.sexe == "dona" && props.weight < 90 && (
        <View style={styles.dieta}>
          <Text style={styles.light}>Calories: ~2000</Text>
          <Text style={styles.bold}>Esmorzar</Text>
          <Text>Pankaces de platan, ou i avena</Text>
          <Text>Torrada amb crema de formatge i fruits del bosc</Text>
          <Text style={styles.bold}>Dinar:</Text>
          <Text>Amanida d'alvocat i pollastre</Text>
          <Text>Postre: Plàtan</Text>
          <Text style={styles.bold}>Snack:</Text>
          <Text>Hummus amb pastanaga</Text>
          <Text style={styles.bold}>Sopar:</Text>
          <Text>Amanida de verdures i tofu</Text>
          <Text>Amanida mediterrània</Text>
          <Text>Postre: una poma amb canyella</Text>
        </View>
      )}
      {props.sexe == "dona" && props.weight >= 90 && (
        <View style={styles.dieta}>
          <Text style={styles.light}>Calories: ~1600</Text>
          <Text style={styles.bold}>Esmorzar</Text>
          <Text>
            Torrada de pa de sègol amb alvocat i formatge baix en grassa
          </Text>
          <Text style={styles.bold}>Dinar:</Text>
          <Text>Faixeta de pollastre, amanida i tomàquet</Text>
          <Text>Postre: Plàtan</Text>
          <Text style={styles.bold}>Snack:</Text>
          <Text>Entrepà de mantega de cacauet</Text>
          <Text style={styles.bold}>Sopar:</Text>
          <Text>Salmó a la planxa i espinacs amb pinyons</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dieta: {
    marginHorizontal: 20,
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
