import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Appbar,
  Card,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";

const Noticia1 = ({ navigation }) => {
  return (
    <>
      <Appbar.Header
        dark={false}
        mode={"center-aligned"}
        style={{ backgroundColor: "#FF675D" }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Notícia" />
      </Appbar.Header>
      <ScrollView>
        <View>
          <Animatable.View animation="zoomIn" duration={500}>
            <Card style={styles.noticies}>
              <Card.Cover
                source={{
                  uri: "https://trombo.info/wp-content/uploads/2022/11/london-blitz.jpg",
                }}
              />
              <Card.Content style={styles.contingut}>
                <Headline style={styles.titols}>
                  Alerta sobre el risc de trombosi a ciutats en guerra
                </Headline>
                <Subheading style={styles.titols}>
                  Passar un llarg temps en espais estrets augmenta els casos
                </Subheading>
                <Paragraph style={styles.paragraf}>
                  En un article científic publicat el 1940 a The Lancet, el
                  doctor Keith Simpson va posar de manifest que les morts per
                  embòlia pulmonar (determinades després d'una autòpsia) aquell
                  any s'havien multiplicat per sis respecte les morts del 1939.
                  Feia referència a morts durant els bombardejos sobre Londres a
                  càrrec de l'exèrcit nazi, que van portar milers de persones a
                  protegir-se al metro en ser insuficients els refugis
                  antiaeris.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Keith va indicar que els llargs períodes de temps que aquests
                  ciutadans van passar amb escassetat de moviment per la falta
                  d’espai de les instal·lacions subterrànies van ser el detonant
                  de l'embòlia pulmonar. Feia temps que la comunitat mèdica
                  sabia que la immobilització era un factor de risc important
                  per a la malaltia tromboembòlica venosa (ETV, trombosi i/o
                  embòlia pulmonar) i l'apreciació de Simpson va ampliar
                  l'espectre al respecte.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Des de llavors, no només la vida en refugis subterranis pot
                  ser un factor de risc d'ETV, sinó que també s'ha constatat en
                  terratrèmols: entre les persones allotjades a centres
                  d'evacuació la incidència d'ETV puja.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Aquest any, un nou article ha alertat que la guerra entre
                  Ucraïna i Rússia pot suposar un augment de casos d'ETV, ja que
                  molts ciutadans s'han refugiat a les instal·lacions del metro.
                </Paragraph>
              </Card.Content>
            </Card>
          </Animatable.View>
        </View>
      </ScrollView>
    </>
  );
};

export default Noticia1;

const styles = StyleSheet.create({
  noticies: {
    marginVertical: 15,
    width: 350,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
  contingut: {
    marginVertical: 8,
  },
  paragraf: {
    marginTop: 15,
  },
  titols: {
    fontWeight: "bold",
  },
});
