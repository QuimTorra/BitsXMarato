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

const Noticia0 = ({ navigation }) => {
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
                  uri: "https://www.bsc.es/sites/default/files/public/bscw2/content/news/horizontal-image/bitsxlamarato_1.jpg",
                }}
              />
              <Card.Content style={styles.contingut}>
                <Headline style={styles.titols}>
                  Arranca a la FIB la #bitsxlaMarató
                </Headline>
                <Paragraph style={styles.paragraf}>
                  Aquest any bitsxlaMarató està organitzada per la Facultat
                  d’Informàtica de Barcelona (FIB), Hackers@UPC (organitzadors
                  de HackUPC), el Barcelona Supercomputing Center - Centro
                  Nacional de Supercomputación (BSC) i l'Escola Superior
                  d'Infermeria del Mar (Hospital del Mar) que contribuiran de
                  tot cor amb La Marató de TV3.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Després de tres edicions, tornem a sumar forces per ajudar a
                  trobar solucions i difondre els problemes de caràcter
                  cardiovascular. Es tracta d'una hackathon plena de
                  creativitat, salut i tecnologia, on professorat, personal
                  investigador i qualsevol professional dels àmbits de la salut
                  i de la tecnologia (però també d'altres àrees!), treballaran
                  en equip, durant 3 dies seguits de forma presencial. Plegats,
                  buscaran i desenvoluparan solucions per fer front a tots els
                  reptes que ens planteja la salut cardiovascular, la principal
                  causa de mort als països desenvolupats i un dels problemes
                  actuals de salut pública més rellevants.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  Et tocarà a tu patir un problema de salut cardiovascular? Ens
                  pot tocar a tothom! Així que no pots faltar!
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  La Hackathon inclourà xerrades formatives que no us podeu
                  perdre! Durant l'últim dia de la Hackathon els equips faran
                  les presentacions i demostracions de les solucions, i
                  propostes de solucions obtingudes als reptes plantejats el
                  primer dia.
                </Paragraph>
                <Paragraph style={styles.paragraf}>
                  I atenció! Hi haurà premis (simbòlics) pel millor projecte de
                  cada repte! Encara que totes les solucions que es proposin
                  així com els donatius per la Marató de TV3 seran ja premis
                  pels milions de persones afectades! Totes elles us ho
                  agrairan!
                </Paragraph>
                <Title style={styles.paragraf}>AJUDA’NS AMB UN DONATIU</Title>
                <Paragraph style={styles.paragraf}>
                  És clar! També busquem un donatiu! Abans, durant i després de
                  la Hackathon la nostra intenció és col·laborar amb la Marató
                  de TV3, mitjançant el donatiu dels participants, patrocinadors
                  i de tota la comunitat universitària de la UPC i més enllà!
                </Paragraph>
              </Card.Content>
            </Card>
          </Animatable.View>
        </View>
      </ScrollView>
    </>
  );
};

export default Noticia0;

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
