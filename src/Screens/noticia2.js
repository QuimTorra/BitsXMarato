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

const Noticia2 = ({ navigation }) => {
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
                  uri: "https://trombo.info/wp-content/uploads/2022/11/tromboinfo-nobelPrize-blood-clot-1.jpg",
                }}
              />
              <Card.Content style={styles.contingut}>
                <Headline style={styles.titols}>
                  ETVs: Anyone, anywhere
                </Headline>
                <Paragraph style={styles.paragraf}>
                  El passat 3 d'octubre l'Organització del Premi Nobel va
                  anunciar el guanyador de la categoria de Medicina: Svante
                  Pääbo, per seqüenciar el genoma del neandertal. Immediatament
                  els mitjans de comunicació van traslladar la informació a la
                  seva audiència i alguns, en explicar qui és aquest metge suec,
                  van detallar que a finals de la dècada dels 2000 va ser
                  hospitalitzat per una embòlia pulmonar, segons va revelar al
                  llibre Neandertal: a la recerca dels genomes perduts.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  De fet Pääbo també va exposar que en investigar sobre aquesta
                  malaltia va descobrir que el seu pare, el també premi Nobel de
                  Medicina Sune Bergström, va iniciar la seva carrera
                  professional col·laborant amb el doctor Erik Jorpes en la
                  purificació de l'heparina, per emprar-la com a medicament.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Pääbo no és l'única persona coneguda que ha patit una malaltia
                  tromboembòlica venosa (ETV, trombosi i/o embòlia pulmonar), ja
                  que és una malaltia que es pot donar en qualsevol persona i a
                  qualsevol edat.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Aquest any també s'ha sabut que l'emperadriu emèrita del Japó,
                  Michiko, va patir una trombosi a una cama a finals d'agost.
                  Peter Jones, empresari anglès i jurat del reality de la BBC
                  Dragon's den, va comentar en un dels programes del març passat
                  que el 2011 va patir una embòlia pulmonar: “Tornava en un vol
                  des de Los Angeles i bàsicament vaig acabar a l'hospital de
                  Windsor amb un tub a l'engonal. Segurament em va passar perquè
                  no em vaig moure durant un període de temps llarg. Des de
                  llavors em moc literalment tota l'estona, fins i tot assegut”.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  La youtuber i influencer iJustine, més jove, va assegurar que
                  va passar “d'estar perfectament bé a gairebé morir en qüestió
                  d'hores” a causa d'una trombosi en un braç. De fet, la
                  popularitat de la noia la va convertir en protagonista d'un
                  webinar del Dia Mundial de la Trombosi, per explicar la seva
                  experiència i demostrar que ningú no és immune a una ETV.
                </Paragraph>
              </Card.Content>
            </Card>
          </Animatable.View>
        </View>
      </ScrollView>
    </>
  );
};

export default Noticia2;

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
