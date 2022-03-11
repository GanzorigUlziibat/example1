import React, { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  View,
  Heading,
  FormControl,
  Input,
  Link,
  Pressable,
  FlatList,
  Avatar,
  Spacer,
} from "native-base";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { openDatabase } from "expo-sqlite";
var db = openDatabase({ name: "aimag.db" });

function HeaderAppBar() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <IconButton
            onPress={() => navigation.navigate("a1")}
            icon={
              <Icon size="sm" as={MaterialIcons} name="add" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Аймаг
          </Text>
        </HStack>
        <HStack>
          {/* <IconButton icon={<Icon as={Feather} name="map" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} /> */}
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="ios-share"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

// http://oblador.github.io/react-native-vector-icons/   --Icons
// (hvz base, Native Base)

function Header() {
  return (
    <Center>
      <HeaderAppBar />
    </Center>
  );
}

function BottomTab() {
  const [selected, setSelected] = useState(1);
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="100%"
        alignSelf="center"
      >
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            style={{ cursor: "pointer" }}
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Aimag
              </Text>
            </Center>
          </Pressable>
          <Pressable
            style={{ cursor: "pointer" }}
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Sum
              </Text>
            </Center>
          </Pressable>
          <Pressable
            style={{ cursor: "pointer" }}
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "cart" : "cart-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                About Us
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
export default ({ navigation }) => {
  let [data, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='aimag'",
        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS aimag", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS 'aimag' ('aid'	INTEGER,'name'	TEXT,'acheck'	INTEGER,'alink'	INTEGER,'daraaalal'	INTEGER,PRIMARY KEY('aid'));",
              []
            );
          }
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='sum'",
  //       [],
  //       function (tx, res) {
  //         console.log("item:", res.rows.length);
  //         if (res.rows.length == 0) {
  //           // txn.executeSql("DROP TABLE IF EXISTS sum", []);
  //           txn.executeSql(
  //             "CREATE TABLE IF NOT EXISTS 'sum' ('sid'	INTEGER,'name'	TEXT,'aid'	INTEGER,'scheck'	INTEGER,'slink'	TEXT,PRIMARY KEY('sid'));",
  //             []
  //           );
  //         }
  //       }
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='gazar'",
  //       [],
  //       function (tx, res) {
  //         console.log("item:", res.rows.length);
  //         if (res.rows.length == 0) {
  //           // txn.executeSql("DROP TABLE IF EXISTS gazar", []);
  //           txn.executeSql(
  //             "CREATE TABLE IF NOT EXISTS 'gazar' ('did'	INTEGER,'dname'	TEXT,'dcheck'	INTEGER,'dlink'	TEXT,'aid'	INTEGER,PRIMARY KEY('did'));",
  //             []
  //           );
  //         }
  //       }
  //     );
  //   });
  // }, []);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "INSERT INTO 'aimag' ('aid','name','acheck','alink','daraaalal') VALUES (1,'Архангай',0,'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9',1),(2,'Баян-Өлгий',1,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9',2),(3,'Баянхонгор',0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80',3),(4,'Булган',0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD',4),(5,'Говь-Алтай',0,'https://mn.wikipedia.org/wiki/%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9',5),(6,'Дорноговь',0,'https://mn.wikipedia.org/wiki/%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%B2%D1%8C',8),(7,'Дорнод',0,'https://mn.wikipedia.org/wiki/%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B4',9),(8,'Дундговь',0,'https://mn.wikipedia.org/wiki/%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9',10),(9,'Завхан',0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD',11),(10,'Өвөрхангай',0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9',13),(11,'Өмнөговь',0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BC%D0%BD%D3%A9%D0%B3%D0%BE%D0%B2%D1%8C',14),(12,'Сүхбаатар',0,'https://mn.wikipedia.org/wiki/%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80_%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3',15),(13,'Сэлэнгэ',1,'https://mn.wikipedia.org/wiki/%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D_%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3',16),(14,'Төв',0,'https://mn.wikipedia.org/wiki/%D0%A2%D3%A9%D0%B2_%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3',17),(15,'Увс',0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%B2%D1%81',18),(16,'Ховд',0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D0%B2%D0%B4',19),(17,'Хөвсгөл',0,'https://mn.wikipedia.org/wiki/%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB',20),(18,'Хэнтий',0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%8D%D0%BD%D1%82%D0%B8%D0%B9',21),(19,'Дархан-Уул',0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D1%85%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB',7),(21,'Орхон',0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%80%D1%85%D0%BE%D0%BD',12),(22,'Говьсүмбэр',1,'https://mn.wikipedia.org/wiki/%D0%93%D0%BE%D0%B2%D1%8C%D1%81%D2%AF%D0%BC%D0%B1%D1%8D%D1%80',6);"
      );
    });
  }, []);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "INSERT INTO 'sum' ('sid','name','aid','scheck','slink') VALUES (1,'Батцэнгэл',1,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D1%86%D1%8D%D0%BD%D0%B3%D1%8D%D0%BB_%D1%81%D1%83%D0%BC'),(2,'Булган',1,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(3,'Жаргалант',1,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(4,'Их Тамир',1,0,'https://mn.wikipedia.org/wiki/%D0%98%D1%85%D1%82%D0%B0%D0%BC%D0%B8%D1%80_%D1%81%D1%83%D0%BC'),(5,'Өндөр-Улаан',1,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BD%D0%B4%D3%A9%D1%80-%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(6,'Өлзийт',1,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BB%D0%B7%D0%B8%D0%B9%D1%82_%D1%81%D1%83%D0%BC_(%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(7,'Өгий нуур',1,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%B3%D0%B8%D0%B9%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC'),(8,'Тариат',1,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%B8%D0%B0%D1%82_%D1%81%D1%83%D0%BC'),(9,'Түвшрүүлэх',1,0,'https://mn.wikipedia.org/wiki/%D0%A2%D3%A9%D0%B2%D1%88%D1%80%D2%AF%D2%AF%D0%BB%D1%8D%D1%85_%D1%81%D1%83%D0%BC'),(10,'Хангай',1,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(11,'Хайрхан',1,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(12,'Хашаат',1,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D1%88%D0%B0%D0%B0%D1%82_%D1%81%D1%83%D0%BC'),(13,'Хотонт',1,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D1%82%D0%BE%D0%BD%D1%82_%D1%81%D1%83%D0%BC'),(14,'Цэцэрлэг',1,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3_%D1%81%D1%83%D0%BC_(%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(15,'Цэнхэр',1,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D0%BD%D1%85%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(16,'Чулуут',1,0,'https://mn.wikipedia.org/wiki/%D0%A7%D1%83%D0%BB%D1%83%D1%83%D1%82_%D1%81%D1%83%D0%BC'),(17,'Эрдэнэмандал',1,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(18,'Цахир',1,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D1%85%D0%B8%D1%80_%D1%81%D1%83%D0%BC'),(21,'Алтай',2,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%B9_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(22,'Алтанцөгц',2,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%BD%D1%86%D3%A9%D0%B3%D1%86_%D1%81%D1%83%D0%BC'),(23,'Баяннуур',2,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(24,'Бугат',2,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%B3%D0%B0%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(25,'Булган',2,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(26,'Буянт',2,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D1%8F%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(27,'Дэлүүн',2,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D2%AF%D2%AF%D0%BD_%D1%81%D1%83%D0%BC'),(28,'Ногоон нуур',2,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B3%D0%BE%D0%BE%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC'),(29,'Сагсай',2,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B3%D1%81%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(30,'Толбо',2,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BB%D0%B1%D0%BE_%D1%81%D1%83%D0%BC'),(31,'Улаан хус',2,0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D1%85%D1%83%D1%81_%D1%81%D1%83%D0%BC'),(32,'Цэнгэл',2,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D0%BD%D0%B3%D1%8D%D0%BB_%D1%81%D1%83%D0%BC'),(33,'Цагаан нуур',2,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9)'),(34,'Өлгий',2,0,NULL),(35,'Баянбулаг',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(36,'Баянговь',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B3%D0%BE%D0%B2%D1%8C_%D1%81%D1%83%D0%BC'),(37,'Баянлиг',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%BB%D0%B8%D0%B3_%D1%81%D1%83%D0%BC'),(38,'Баян-Овоо',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(39,'Баян-Өндөр',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(40,'Баянцагаан',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(41,'Баацагаан',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D0%B0%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(42,'Богд',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(43,'Бөмбөгөр',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D3%A9%D0%BC%D0%B1%D3%A9%D0%B3%D3%A9%D1%80_%D1%81%D1%83%D0%BC'),(44,'Бууцагаан',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D1%83%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(45,'Галуут',3,0,'https://mn.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D1%83%D1%83%D1%82_%D1%81%D1%83%D0%BC'),(46,'Гурван булаг',3,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D0%B2%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(47,'Жаргалант',3,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(48,'Жинст',3,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B8%D0%BD%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(49,'Заг',3,0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(50,'Өлзийт',3,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BB%D0%B7%D0%B8%D0%B9%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80)'),(51,'Хүрээмарал',3,0,'https://mn.wikipedia.org/wiki/%D0%A5%D2%AF%D1%80%D1%8D%D1%8D%D0%BC%D0%B0%D1%80%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(52,'Шинэжинст',3,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BD%D1%8D%D0%B6%D0%B8%D0%BD%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(53,'Эрдэнэцогт',3,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%86%D0%BE%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(54,'Шаргалжуут',3,0,NULL),(55,'Баянхонгор',3,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80_(%D1%85%D0%BE%D1%82)'),(56,'Баян-Агт',4,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%90%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(57,'Бугат',4,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%B3%D0%B0%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(58,'Бүрэгхангай',4,0,'https://mn.wikipedia.org/wiki/%D0%91%D2%AF%D1%80%D1%8D%D0%B3%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(59,'Гурванбулаг',4,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D0%B2%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(60,'Дашинчилэн',4,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%88%D0%B8%D0%BD%D1%87%D0%B8%D0%BB%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(61,'Могод',4,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%BE%D0%B4_%D1%81%D1%83%D0%BC'),(62,'Орхон',4,0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%80%D1%85%D0%BE%D0%BD_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(63,'Сайхан',4,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(64,'Сэлэнгэ',4,0,'https://mn.wikipedia.org/wiki/%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(65,'Тэшиг',4,0,'https://mn.wikipedia.org/wiki/%D0%A2%D1%8D%D1%88%D0%B8%D0%B3_%D1%81%D1%83%D0%BC'),(66,'Хангал',4,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%B3%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(67,'Хишиг-Өндөр',4,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B8%D1%88%D0%B8%D0%B3-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC'),(68,'Хутагт-Өндөр',4,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%83%D1%82%D0%B0%D0%B3-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC'),(69,'Баяннуур',4,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(70,'Рашаант',4,0,'https://mn.wikipedia.org/wiki/%D0%A0%D0%B0%D1%88%D0%B0%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD)'),(71,'Сансар',4,0,NULL),(72,'Хялганат',4,0,NULL),(73,'Булган',4,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_(%D1%85%D0%BE%D1%82)'),(74,'Алтай',5,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%B9_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(75,'Баян-Уул',5,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(76,'Бигэр',5,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B8%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(77,'Бугат',5,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%B3%D0%B0%D1%82_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(78,'Дарви',5,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D0%B2%D0%B8_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(79,'Дэлгэр',5,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(80,'Жаргалан',5,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(81,'Тайшир',5,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D1%88%D0%B8%D1%80_%D1%81%D1%83%D0%BC'),(82,'Тонхил',5,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BD%D1%85%D0%B8%D0%BB_%D1%81%D1%83%D0%BC'),(83,'Төгрөг',5,0,'https://mn.wikipedia.org/wiki/%D0%A2%D3%A9%D0%B3%D1%80%D3%A9%D0%B3_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(84,'Халиун',5,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BB%D0%B8%D1%83%D0%BD_%D1%81%D1%83%D0%BC'),(85,'Хөхморьт',5,0,'https://mn.wikipedia.org/wiki/%D0%A5%D3%A9%D1%85%D0%BC%D0%BE%D1%80%D1%8C%D1%82_%D1%81%D1%83%D0%BC'),(86,'Цогт',5,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%BE%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(87,'Цээл',5,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%8D%D0%BB_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(88,'Чандмана',5,0,'https://mn.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BD%D0%B4%D0%BC%D0%B0%D0%BD%D1%8C_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(89,'Шарга',5,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B0%D1%80%D0%B3%D0%B0_%D1%81%D1%83%D0%BC'),(90,'Эрдэнэ',5,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C-%D0%90%D0%BB%D1%82%D0%B0%D0%B9)'),(91,'Гуулин',5,0,NULL),(92,'Есөнбулаг',5,0,'https://mn.wikipedia.org/wiki/%D0%95%D1%81%D3%A9%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(93,'Айраг',6,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%B9%D1%80%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(94,'Алтанширээ',6,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%BD%D1%88%D0%B8%D1%80%D1%8D%D1%8D_%D1%81%D1%83%D0%BC'),(95,'Даланжаргалан',6,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D0%B0%D0%BD%D0%B6%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(96,'Дэлгэрэх',6,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%8D%D1%85_%D1%81%D1%83%D0%BC'),(97,'Иххэт',6,0,'https://mn.wikipedia.org/wiki/%D0%98%D1%85%D1%85%D1%8D%D1%82_%D1%81%D1%83%D0%BC'),(98,'Мандах',6,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D1%85_%D1%81%D1%83%D0%BC'),(99,'Өргөн',6,0,'https://mn.wikipedia.org/wiki/%D3%A8%D1%80%D0%B3%D3%A9%D0%BD_%D1%81%D1%83%D0%BC'),(100,'Сайхандулаан',6,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%85%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(101,'Улаанбадрах',6,0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B4%D1%80%D0%B0%D1%85_%D1%81%D1%83%D0%BC'),(102,'Хатанбулаг',6,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D1%82%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(103,'Хөвсгөл',6,0,'https://mn.wikipedia.org/wiki/%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB_%D1%81%D1%83%D0%BC'),(104,'Эрдэнэ',6,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D_%D1%81%D1%83%D0%BC_(%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%B2%D1%8C)'),(105,'Замын-Үүд',6,0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D1%8B%D0%BD-%D2%AE%D2%AF%D0%B4_%D1%81%D1%83%D0%BC'),(106,'Зүүнбаян',6,0,NULL),(107,'Сайншанд',6,0,NULL),(108,'Баяндун',7,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B4%D1%83%D0%BD_%D1%81%D1%83%D0%BC'),(109,'Баянтүмэн',7,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%82%D2%AF%D0%BC%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(110,'Баян-Уул',7,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC_(%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B4)'),(111,'Булган',7,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B4)'),(112,'Гурванзагал',7,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D0%B2%D0%B0%D0%BD%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(113,'Дашбалбар',7,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%88%D0%B1%D0%B0%D0%BB%D0%B1%D0%B0%D1%80_%D1%81%D1%83%D0%BC'),(114,'Матад',7,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D0%B0%D0%B4_%D1%81%D1%83%D0%BC'),(115,'Сэргэлэн',7,0,'https://mn.wikipedia.org/wiki/%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D0%BB%D1%8D%D0%BD_%D1%81%D1%83%D0%BC_(%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B4)'),(116,'Халх гол',7,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BB%D1%85%D0%B3%D0%BE%D0%BB_%D1%81%D1%83%D0%BC'),(117,'Хөлөнбуйр',7,0,'https://mn.wikipedia.org/wiki/%D0%A5%D3%A9%D0%BB%D3%A9%D0%BD%D0%B1%D1%83%D0%B9%D1%80_%D1%81%D1%83%D0%BC'),(118,'Цагаан-Овоо',7,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC'),(119,'Чулуун хороот',7,0,'https://mn.wikipedia.org/wiki/%D0%A7%D1%83%D0%BB%D1%83%D1%83%D0%BD%D1%85%D0%BE%D1%80%D0%BE%D0%BE%D1%82_%D1%81%D1%83%D0%BC'),(120,'Чойбалсан',7,0,'https://mn.wikipedia.org/wiki/%D0%A7%D0%BE%D0%B9%D0%B1%D0%B0%D0%BB%D1%81%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(121,'Хэрлэн',7,0,'https://mn.wikipedia.org/wiki/%D0%A7%D0%BE%D0%B9%D0%B1%D0%B0%D0%BB%D1%81%D0%B0%D0%BD_%D1%85%D0%BE%D1%82'),(122,'Адаацаг',8,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%B4%D0%B0%D0%B0%D1%86%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(123,'Баянжаргалан',8,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B6%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%94%D1%83%D0%BD%D0%B4%D0%B3%D0%BE%D0%B2%D1%8C)'),(124,'Говь-Угтаал',8,0,'https://mn.wikipedia.org/wiki/%D0%93%D0%BE%D0%B2%D1%8C-%D0%A3%D0%B3%D1%82%D0%B0%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(125,'Гурвансайхан',8,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D0%B2%D0%B0%D0%BD%D1%81%D0%B0%D0%B9%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(126,'Дэлгэрхангай',8,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(127,'Дэлгэрцогт',8,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%86%D0%BE%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(128,'Дэрэн',8,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D1%80%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(129,'Луус',8,0,'https://mn.wikipedia.org/wiki/%D0%9B%D1%83%D1%83%D1%81_%D1%81%D1%83%D0%BC'),(130,'Өлзийт',8,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BB%D0%B7%D0%B8%D0%B9%D1%82_%D1%81%D1%83%D0%BC_(%D0%94%D1%83%D0%BD%D0%B4%D0%B3%D0%BE%D0%B2%D1%8C)'),(131,'Өндөршил',8,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BD%D0%B4%D3%A9%D1%80%D1%88%D0%B8%D0%BB_%D1%81%D1%83%D0%BC'),(132,'Сайнцагаан',8,0,NULL),(133,'Сайхан-Овоо',8,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%85%D0%B0%D0%BD-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC'),(134,'Хулд',8,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%83%D0%BB%D0%B4_%D1%81%D1%83%D0%BC'),(135,'Цагаандэлгэр',8,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(136,'Эрдэнэдалай',8,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D0%B4%D0%B0%D0%BB%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(137,'Мандалговь',8,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%B3%D0%BE%D0%B2%D1%8C'),(138,'Алдархаан',9,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D0%B4%D0%B0%D1%80%D1%85%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(139,'Баянтэс',9,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%82%D1%8D%D1%81_%D1%81%D1%83%D0%BC'),(140,'Баянхайрхан',9,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(141,'Булнай',9,0,''),(142,'Дөрвөлжин',9,0,'https://mn.wikipedia.org/wiki/%D0%94%D3%A9%D1%80%D0%B2%D3%A9%D0%BB%D0%B6%D0%B8%D0%BD_%D1%81%D1%83%D0%BC'),(143,'Завханмандал',9,0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(144,'Идэр',9,0,'https://mn.wikipedia.org/wiki/%D0%98%D0%B4%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(145,'Их-Уул',9,0,'https://mn.wikipedia.org/wiki/%D0%98%D1%85-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC_(%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD)'),(146,'Нөмрөг',9,0,'https://mn.wikipedia.org/wiki/%D0%9D%D3%A9%D0%BC%D1%80%D3%A9%D0%B3_%D1%81%D1%83%D0%BC'),(147,'Отгон',9,0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%82%D0%B3%D0%BE%D0%BD_%D1%81%D1%83%D0%BC'),(148,'Сантмаргац',9,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D1%82%D0%BC%D0%B0%D1%80%D0%B3%D0%B0%D1%86_%D1%81%D1%83%D0%BC'),(149,'Сонгино',9,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D0%B3%D0%B8%D0%BD%D0%BE_%D1%81%D1%83%D0%BC'),(150,'Түдэвтэй',9,0,'https://mn.wikipedia.org/wiki/%D0%A2%D2%AF%D0%B4%D1%8D%D0%B2%D1%82%D1%8D%D0%B9_%D1%81%D1%83%D0%BC'),(151,'Тэлмэн',9,0,'https://mn.wikipedia.org/wiki/%D0%A2%D1%8D%D0%BB%D0%BC%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(152,'Тэс',9,0,'https://mn.wikipedia.org/wiki/%D0%A2%D1%8D%D1%81_%D1%81%D1%83%D0%BC_(%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD)'),(153,'Ургамал',9,0,'https://mn.wikipedia.org/wiki/%D0%A3%D1%80%D0%B3%D0%B0%D0%BC%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(154,'Цагаанхайрхан',9,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%85%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD)'),(155,'Цагаанчулуут',9,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%87%D1%83%D0%BB%D1%83%D1%83%D1%82_%D1%81%D1%83%D0%BC'),(156,'Цэцэн-Уул',9,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%86%D1%8D%D0%BD-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC'),(157,'Шилүүстэй',9,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BB%D2%AF%D2%AF%D1%81%D1%82%D1%8D%D0%B9_%D1%81%D1%83%D0%BC'),(158,'Эрдэнэхайрхан',9,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%85%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(159,'Яруу',9,0,'https://mn.wikipedia.org/wiki/%D0%AF%D1%80%D1%83%D1%83_%D1%81%D1%83%D0%BC'),(160,'Асгат',9,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%81%D0%B3%D0%B0%D1%82_%D1%81%D1%83%D0%BC_(%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD)'),(161,'Улиастай',9,0,NULL),(162,'Баруунбаян-Улаан',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D1%83%D1%83%D0%BD%D0%B1%D0%B0%D1%8F%D0%BD-%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(163,'Бат-Өлзийт',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%82-%D3%A8%D0%BB%D0%B7%D0%B8%D0%B9_%D1%81%D1%83%D0%BC'),(164,'Баянгол',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B3%D0%BE%D0%BB_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(165,'Баян-Өндөр',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(166,'Богд',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(167,'Бүрд',10,0,'https://mn.wikipedia.org/wiki/%D0%91%D2%AF%D1%80%D0%B4_%D1%81%D1%83%D0%BC'),(168,'Гучин-Ус',10,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%87%D0%B8%D0%BD-%D0%A3%D1%81_%D1%81%D1%83%D0%BC'),(169,'Зүйл',10,0,NULL),(170,'Зүүнбаян-Улаан',10,0,'https://mn.wikipedia.org/wiki/%D0%97%D2%AF%D2%AF%D0%BD%D0%B1%D0%B0%D1%8F%D0%BD-%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(171,'Нарийнтээл',10,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B8%D0%B9%D0%BD%D1%82%D1%8D%D1%8D%D0%BB_%D1%81%D1%83%D0%BC'),(172,'Өлзийт',10,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BB%D0%B7%D0%B8%D0%B9%D1%82_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(173,'Сант',10,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(174,'Тарагт',10,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%B0%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(175,'Төгрөг',10,0,'https://mn.wikipedia.org/wiki/%D0%A2%D3%A9%D0%B3%D1%80%D3%A9%D0%B3_%D1%81%D1%83%D0%BC_(%D3%A8%D0%B2%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9)'),(176,'Уянга',10,0,'https://mn.wikipedia.org/wiki/%D0%A3%D1%8F%D0%BD%D0%B3%D0%B0_%D1%81%D1%83%D0%BC'),(177,'Хайрхандулаан',10,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(178,'Хархорин',10,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%85%D0%BE%D1%80%D0%B8%D0%BD_%D1%81%D1%83%D0%BC'),(179,'Хужирт',10,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%83%D0%B6%D0%B8%D1%80%D1%82_%D1%81%D1%83%D0%BC'),(180,'Баянтээг',10,0,NULL),(181,'Их-Уул',10,0,NULL),(182,'Арвайхээр',10,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D0%B2%D0%B0%D0%B9%D1%85%D1%8D%D1%8D%D1%80'),(183,'Баяндалай',11,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B4%D0%B0%D0%BB%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(184,'Баяновоо',11,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC_(%D3%A8%D0%BC%D0%BD%D3%A9%D0%B3%D0%BE%D0%B2%D1%8C)'),(185,'Булган',11,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D3%A8%D0%BC%D0%BD%D3%A9%D0%B3%D0%BE%D0%B2%D1%8C)'),(186,'Гурвантэс',11,0,'https://mn.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D0%B2%D0%B0%D0%BD%D1%82%D1%8D%D1%81_%D1%81%D1%83%D0%BC'),(187,'Мандал-Овоо',11,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC'),(188,'Манлай',11,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%BB%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(189,'Номгон',11,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%BE%D0%BC%D0%B3%D0%BE%D0%BD_%D1%81%D1%83%D0%BC'),(190,'Ноён',11,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%BE%D1%91%D0%BD_%D1%81%D1%83%D0%BC'),(191,'Сэврэй',11,0,'https://mn.wikipedia.org/wiki/%D0%A1%D1%8D%D0%B2%D1%80%D1%8D%D0%B9_%D1%81%D1%83%D0%BC'),(192,'Ханбогд',11,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D0%B1%D0%BE%D0%B3%D0%B4_%D1%81%D1%83%D0%BC'),(193,'Ханхонгор',11,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D1%85%D0%BE%D0%BD%D0%B3%D0%BE%D1%80_%D1%81%D1%83%D0%BC'),(194,'Хүрмэн',11,0,'https://mn.wikipedia.org/wiki/%D0%A5%D2%AF%D1%80%D0%BC%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(195,'Цогт-Овоо',11,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%BE%D0%B3%D1%82-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC'),(196,'Цогтцэций',11,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%BE%D0%B3%D1%82%D1%86%D1%8D%D1%86%D0%B8%D0%B9_%D1%81%D1%83%D0%BC'),(197,'Даланзадгад',11,0,NULL),(198,'Асгат',12,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%81%D0%B3%D0%B0%D1%82_%D1%81%D1%83%D0%BC_(%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80)'),(199,'Баяндэлгэр',12,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC_(%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80)'),(200,'Дарьганга',12,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D1%8C%D0%B3%D0%B0%D0%BD%D0%B3%D0%B0_%D1%81%D1%83%D0%BC'),(201,'Мөнххаан',12,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D0%BD%D1%85%D1%85%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(202,'Наран',12,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(203,'Онгон',12,0,'https://mn.wikipedia.org/wiki/%D0%9E%D0%BD%D0%B3%D0%BE%D0%BD_%D1%81%D1%83%D0%BC'),(204,'Сүхбаатар',12,0,'https://mn.wikipedia.org/wiki/%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80_%D1%81%D1%83%D0%BC'),(205,'Түвшинширээ',12,0,'https://mn.wikipedia.org/wiki/%D0%A2%D2%AF%D0%B2%D1%88%D0%B8%D0%BD%D1%88%D0%B8%D1%80%D1%8D%D1%8D_%D1%81%D1%83%D0%BC'),(206,'Түмэнцогт',12,0,'https://mn.wikipedia.org/wiki/%D0%A3%D1%83%D0%BB%D0%B1%D0%B0%D1%8F%D0%BD_%D1%81%D1%83%D0%BC'),(207,'Уулбаян',12,0,'https://mn.wikipedia.org/wiki/%D0%A3%D1%83%D0%BB%D0%B1%D0%B0%D1%8F%D0%BD_%D1%81%D1%83%D0%BC'),(208,'Халзан',12,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BB%D0%B7%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(209,'Эрдэнэцагаан',12,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(210,'Бүрэнцогт',12,0,NULL),(211,'Баруун-Урт',12,0,NULL),(212,'Алтанбулаг',13,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC_(%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D)'),(213,'Баянгол',13,0,NULL),(214,'Баруунбүрэн',13,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D1%83%D1%83%D0%BD%D0%B1%D2%AF%D1%80%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(215,'Ерөө',13,0,'https://mn.wikipedia.org/wiki/%D0%95%D1%80%D3%A9%D3%A9_%D1%81%D1%83%D0%BC'),(216,'Зүүнбүрэн',13,0,'https://mn.wikipedia.org/wiki/%D0%97%D2%AF%D2%AF%D0%BD%D0%B1%D2%AF%D1%80%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(217,'Мандал',13,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(218,'Орхон',13,0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%80%D1%85%D0%BE%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D)'),(219,'Орхонтуул',13,0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%80%D1%85%D0%BE%D0%BD%D1%82%D1%83%D1%83%D0%BB_%D1%81%D1%83%D0%BC'),(220,'Сайхан',13,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D)'),(221,'Сант',13,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D)'),(222,'Түшиг',13,0,'https://mn.wikipedia.org/wiki/%D0%A2%D2%AF%D1%88%D0%B8%D0%B3_%D1%81%D1%83%D0%BC'),(223,'Шаамар',13,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B0%D0%BC%D0%B0%D1%80_%D1%81%D1%83%D0%BC'),(224,'Хүдэр',13,0,'https://mn.wikipedia.org/wiki/%D0%A5%D2%AF%D0%B4%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(225,'Жавхлант',13,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D0%B2%D1%85%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC'),(226,'Цагааннуур',13,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC_(%D0%A1%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D1%8D)'),(227,'Хушаат',13,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%83%D1%88%D0%B0%D0%B0%D1%82_%D1%81%D1%83%D0%BC'),(228,'Сүхбаатар',13,0,'https://mn.wikipedia.org/wiki/%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80_(%D1%85%D0%BE%D1%82)'),(229,'Алтанбулаг',14,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(230,'Батсүмбэр',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D1%81%D2%AF%D0%BC%D0%B1%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(231,'Баян',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD_%D1%81%D1%83%D0%BC'),(232,'Баян-Өнжүүл',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BD%D0%B6%D2%AF%D2%AF%D0%BB_%D1%81%D1%83%D0%BC'),(233,'Баяндэлгэр',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(234,'Баянжаргалан',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B6%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(235,'Баянцагаан',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%86%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(236,'Баянцогт',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%86%D0%BE%D0%B3%D1%82_%D1%81%D1%83%D0%BC'),(237,'Борнуур',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC'),(238,'Бүрэн',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D2%AF%D1%80%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(239,'Дэлгэрхаан',14,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%85%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(240,'Жаргалант',14,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(241,'Заамар',14,0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%B0%D0%BC%D0%B0%D1%80_%D1%81%D1%83%D0%BC'),(242,'Лүн',14,0,'https://mn.wikipedia.org/wiki/%D0%9B%D2%AF%D0%BD_%D1%81%D1%83%D0%BC'),(243,'Мөнгөнморьт',14,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D0%BD%D0%B3%D3%A9%D0%BD%D0%BC%D0%BE%D1%80%D1%8C%D1%82_%D1%81%D1%83%D0%BC'),(244,'Өндөрширээт',14,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BD%D0%B4%D3%A9%D1%80%D1%88%D0%B8%D1%80%D1%8D%D1%8D%D1%82_%D1%81%D1%83%D0%BC'),(245,'Сэргэлэн',14,0,'https://mn.wikipedia.org/wiki/%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D0%BB%D1%8D%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(246,'Угтаал',14,0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%B3%D1%82%D0%B0%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(247,'Эрдэнэ',14,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(248,'Эрдэнэсант',14,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%81%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC'),(249,'Баянчандмань',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%87%D0%B0%D0%BD%D0%B4%D0%BC%D0%B0%D0%BD%D1%8C_%D1%81%D1%83%D0%BC'),(250,'Сүмбэр',14,0,'https://mn.wikipedia.org/wiki/%D0%A1%D2%AF%D0%BC%D0%B1%D1%8D%D1%80_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(251,'Цээл',14,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%8D%D0%BB_%D1%81%D1%83%D0%BC_(%D0%A2%D3%A9%D0%B2)'),(252,'Баянхангай',14,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(253,'Аргалант',14,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC'),(254,'Архуст',14,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D1%85%D1%83%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(255,'Зуунмод',14,0,NULL),(256,'Баруунтуруун',15,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D1%83%D1%83%D0%BD%D1%82%D1%83%D1%80%D1%83%D1%83%D0%BD_%D1%81%D1%83%D0%BC'),(257,'Бөхмөрөн',15,0,'https://mn.wikipedia.org/wiki/%D0%91%D3%A9%D1%85%D0%BC%D3%A9%D1%80%D3%A9%D0%BD_%D1%81%D1%83%D0%BC'),(258,'Давст',15,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D0%B2%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(259,'Завхан',15,0,'https://mn.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(260,'Зүүнговь',15,0,'https://mn.wikipedia.org/wiki/%D0%97%D2%AF%D2%AF%D0%BD%D0%B3%D0%BE%D0%B2%D1%8C_%D1%81%D1%83%D0%BC'),(261,'Зүүнхангай',15,0,'https://mn.wikipedia.org/wiki/%D0%97%D2%AF%D2%AF%D0%BD%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(262,'Малчин',15,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%87%D0%B8%D0%BD_%D1%81%D1%83%D0%BC'),(263,'Наранбулаг',15,0,'https://mn.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B0%D0%BD%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(264,'Өлгий',15,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9_%D1%81%D1%83%D0%BC'),(265,'Өмнөговь',15,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BC%D0%BD%D3%A9%D0%B3%D0%BE%D0%B2%D1%8C_%D1%81%D1%83%D0%BC'),(266,'Өндөрхангай',15,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BD%D0%B4%D3%A9%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D1%81%D1%83%D0%BC'),(267,'Сагил',15,0,'https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B3%D0%B8%D0%BB_%D1%81%D1%83%D0%BC'),(268,'Тариалан',15,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%B8%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A3%D0%B2%D1%81)'),(269,'Түргэн',15,0,'https://mn.wikipedia.org/wiki/%D0%A2%D2%AF%D1%80%D0%B3%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(270,'Тэс',15,0,'https://mn.wikipedia.org/wiki/%D0%A2%D1%8D%D1%81_%D1%81%D1%83%D0%BC_(%D0%A3%D0%B2%D1%81)'),(271,'Ховд',15,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D0%B2%D0%B4_%D1%81%D1%83%D0%BC_(%D0%A3%D0%B2%D1%81)'),(272,'Хяргас',15,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%8F%D1%80%D0%B3%D0%B0%D1%81_%D1%81%D1%83%D0%BC'),(273,'Цагаанхайрхан',15,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%85%D0%B0%D0%B9%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A3%D0%B2%D1%81)'),(274,'Улаангом',15,0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B3%D0%BE%D0%BC_%D1%81%D1%83%D0%BC'),(275,'Алтай',16,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%B9_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(276,'Булган',16,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(277,'Буянт',16,0,'https://mn.wikipedia.org/wiki/%D0%91%D1%83%D1%8F%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(278,'Дарви',16,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D0%B2%D0%B8_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(279,'Дуут',16,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%83%D1%83%D1%82_%D1%81%D1%83%D0%BC'),(280,'Зэрэг',16,0,'https://mn.wikipedia.org/wiki/%D0%97%D1%8D%D1%80%D1%8D%D0%B3_%D1%81%D1%83%D0%BC'),(281,'Манхан',16,0,'https://mn.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(282,'Мянгад',16,0,'https://mn.wikipedia.org/wiki/%D0%9C%D1%8F%D0%BD%D0%B3%D0%B0%D0%B4_%D1%81%D1%83%D0%BC'),(283,'Мөст',16,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(284,'Мөнххайрхан',16,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D1%81%D1%82_%D1%81%D1%83%D0%BC'),(285,'Үенч',16,0,'https://mn.wikipedia.org/wiki/%D2%AE%D0%B5%D0%BD%D1%87_%D1%81%D1%83%D0%BC'),(286,'Ховд',16,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D0%B2%D0%B4_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(287,'Цэцэг',16,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%86%D1%8D%D0%B3_%D1%81%D1%83%D0%BC'),(288,'Чандмань',16,0,'https://mn.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BD%D0%B4%D0%BC%D0%B0%D0%BD%D1%8C_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(289,'Эрдэнэбүрэн',16,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D0%B1%D2%AF%D1%80%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(290,'Дөргөн',16,0,'https://mn.wikipedia.org/wiki/%D0%94%D3%A9%D1%80%D0%B3%D3%A9%D0%BD_%D1%81%D1%83%D0%BC'),(291,'Ховд',16,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D0%B2%D0%B4_%D1%81%D1%83%D0%BC_(%D0%A5%D0%BE%D0%B2%D0%B4)'),(292,'Алаг-Эрдэнэ',17,0,'https://mn.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D0%B3-%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D_%D1%81%D1%83%D0%BC'),(293,'Арбулаг',17,0,'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(294,'Баянзүрх',17,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%B7%D2%AF%D1%80%D1%85_%D1%81%D1%83%D0%BC'),(295,'Бүрэнтогтох',17,0,'https://mn.wikipedia.org/wiki/%D0%91%D2%AF%D1%80%D1%8D%D0%BD%D1%82%D0%BE%D0%B3%D1%82%D0%BE%D1%85_%D1%81%D1%83%D0%BC'),(296,'Галт',17,0,'https://mn.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D1%82_%D1%81%D1%83%D0%BC'),(297,'Жаргалант',17,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(298,'Их-Уул',17,0,'https://mn.wikipedia.org/wiki/%D0%98%D1%85-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(299,'Рашаант',17,0,'https://mn.wikipedia.org/wiki/%D0%A0%D0%B0%D1%88%D0%B0%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(300,'Ринчинлхүмбэ',17,0,'https://mn.wikipedia.org/wiki/%D0%A0%D1%8D%D0%BD%D1%87%D0%B8%D0%BD%D0%BB%D1%85%D2%AF%D0%BC%D0%B1%D1%8D_%D1%81%D1%83%D0%BC'),(301,'Тариалан',17,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%B8%D0%B0%D0%BB%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(302,'Тосонцэнгэл',17,0,'https://mn.wikipedia.org/wiki/%D0%A2%D0%BE%D1%81%D0%BE%D0%BD%D1%86%D1%8D%D0%BD%D0%B3%D1%8D%D0%BB_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(303,'Төмөрбулаг',17,0,'https://mn.wikipedia.org/wiki/%D0%A2%D3%A9%D0%BC%D3%A9%D1%80%D0%B1%D1%83%D0%BB%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(304,'Түнэл',17,0,'https://mn.wikipedia.org/wiki/%D0%A2%D2%AF%D0%BD%D1%8D%D0%BB_%D1%81%D1%83%D0%BC'),(305,'Улаан-Уул',17,0,'https://mn.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC'),(306,'Ханх',17,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D1%85_%D1%81%D1%83%D0%BC'),(307,'Цагаан-Уул',17,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB_%D1%81%D1%83%D0%BC'),(308,'Цагаан-Үүр',17,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD-%D2%AE%D2%AF%D1%80_%D1%81%D1%83%D0%BC'),(309,'Цэцэрлэг',17,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(310,'Чандмана-Өндөр',17,0,'https://mn.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BD%D0%B4%D0%BC%D0%B0%D0%BD%D1%8C-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC'),(311,'Шинэ-Идэр',17,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BD%D1%8D-%D0%98%D0%B4%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(312,'Хатгал',17,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%B0%D1%82%D0%B3%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(313,'Цагаан нуур',17,0,'https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D0%BD%D1%83%D1%83%D1%80_%D1%81%D1%83%D0%BC_(%D0%A5%D3%A9%D0%B2%D1%81%D0%B3%D3%A9%D0%BB)'),(314,'Эрдэнэбулган',17,0,'https://mn.wikipedia.org/wiki/%D0%AD%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D0%B1%D1%83%D0%BB%D0%B3%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(315,'Мөрөн',17,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D1%80%D3%A9%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A5%D1%8D%D0%BD%D1%82%D0%B8%D0%B9)'),(316,'Батноров',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D0%BD%D0%BE%D1%80%D0%BE%D0%B2_%D1%81%D1%83%D0%BC'),(317,'Батширээт',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D1%88%D0%B8%D1%80%D1%8D%D1%8D%D1%82_%D1%81%D1%83%D0%BC'),(318,'Баян-Адрага',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%90%D0%B4%D1%80%D0%B0%D0%B3%D0%B0_%D1%81%D1%83%D0%BC'),(319,'Баянмөнх',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D0%BC%D3%A9%D0%BD%D1%85_%D1%81%D1%83%D0%BC'),(320,'Баян-Овоо',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D0%9E%D0%B2%D0%BE%D0%BE_%D1%81%D1%83%D0%BC_(%D0%A5%D1%8D%D0%BD%D1%82%D0%B8%D0%B9)'),(321,'Баянхутагт',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%85%D1%83%D1%82%D0%B0%D0%B3_%D1%81%D1%83%D0%BC'),(322,'Биндэр',18,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B8%D0%BD%D0%B4%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(323,'Галшир',18,0,'https://mn.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D1%88%D0%B0%D1%80_%D1%81%D1%83%D0%BC'),(324,'Дадал',18,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D0%B4%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(325,'Дархан',18,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D1%85%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(326,'Дэлгэрхаан',18,0,'https://mn.wikipedia.org/wiki/%D0%94%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%85%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A5%D1%8D%D0%BD%D1%82%D0%B8%D0%B9)'),(327,'Жаргалтхаан',18,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D1%82%D1%85%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC'),(328,'Мөрөн',18,0,'https://mn.wikipedia.org/wiki/%D0%9C%D3%A9%D1%80%D3%A9%D0%BD_%D1%81%D1%83%D0%BC_(%D0%A5%D1%8D%D0%BD%D1%82%D0%B8%D0%B9)'),(329,'Норовлин',18,0,NULL),(330,'Өмнөдэлгэр',18,0,'https://mn.wikipedia.org/wiki/%D3%A8%D0%BC%D0%BD%D3%A9%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80_%D1%81%D1%83%D0%BC'),(331,'Хэрлэн',18,0,'https://mn.wikipedia.org/wiki/%D0%A5%D1%8D%D1%80%D0%BB%D1%8D%D0%BD_%D1%81%D1%83%D0%BC'),(332,'Цэнхэрмандал',18,0,'https://mn.wikipedia.org/wiki/%D0%A6%D1%8D%D0%BD%D1%85%D1%8D%D1%80%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(333,'Бэрх',18,0,NULL),(334,'Өлзийт',18,0,NULL),(335,'Бор-Өндөр',18,0,NULL),(336,'Гурванбулаг',18,0,NULL),(337,'Өндөрхаан',18,0,NULL),(338,'Хонгор',19,0,'https://mn.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BD%D0%B3%D0%BE%D1%80_%D1%81%D1%83%D0%BC'),(339,'Орхон',19,0,'https://mn.wikipedia.org/wiki/%D0%9E%D1%80%D1%85%D0%BE%D0%BD_%D1%81%D1%83%D0%BC_(%D0%94%D0%B0%D1%80%D1%85%D0%B0%D0%BD-%D0%A3%D1%83%D0%BB)'),(340,'Шарын гол',19,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B0%D1%80%D1%8B%D0%BD%D0%B3%D0%BE%D0%BB_%D1%81%D1%83%D0%BC'),(341,'Дархан',19,0,'https://mn.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D1%85%D0%B0%D0%BD'),(351,'Жаргалант',21,0,'https://mn.wikipedia.org/wiki/%D0%96%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD%D1%82_%D1%81%D1%83%D0%BC_(%D0%9E%D1%80%D1%85%D0%BE%D0%BD)'),(352,'Орхон',21,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BD%D0%B4%D3%A9%D1%80_%D1%81%D1%83%D0%BC_(%D0%9E%D1%80%D1%85%D0%BE%D0%BD)'),(353,'Баянтал',22,0,'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD%D1%82%D0%B0%D0%BB_%D1%81%D1%83%D0%BC'),(354,'Шивээговь',22,0,'https://mn.wikipedia.org/wiki/%D0%A8%D0%B8%D0%B2%D1%8D%D1%8D%D0%B3%D0%BE%D0%B2%D1%8C_%D1%81%D1%83%D0%BC'),(355,'Чойр',22,0,'https://mn.wikipedia.org/wiki/%D0%A1%D2%AF%D0%BC%D0%B1%D1%8D%D1%80_%D1%81%D1%83%D0%BC_(%D0%93%D0%BE%D0%B2%D1%8C%D1%81%D2%AF%D0%BC%D0%B1%D1%8D%D1%80)');"
      );
    });
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT aid, name, acheck, alink, daraaalal FROM aimag WHERE acheck = 1 ORDER BY daraaalal ASC",
        // "SELECT name FROM sum",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  // const data = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     fullName: "Aafreen Khan",
  //     timeStamp: "12:47 PM",
  //     recentText: "Good Day!",
  //     avatarUrl:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     fullName: "Sujitha Mathur",
  //     timeStamp: "11:11 PM",
  //     recentText: "Cheer up, there!",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     fullName: "Anci Barroco",
  //     timeStamp: "6:22 PM",
  //     recentText: "Good Day!",
  //     avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  //   },
  //   {
  //     id: "68694a0f-3da1-431f-bd56-142371e29d72",
  //     fullName: "Aniket Kumar",
  //     timeStamp: "8:56 PM",
  //     recentText: "All the best",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  //   },
  //   {
  //     id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //     fullName: "Kiara",
  //     timeStamp: "12:47 PM",
  //     recentText: "I will call today.",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  //   },
  // ];

  return (
    <NativeBaseProvider>
      <View flex={1} px="0">
        <Header />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.name}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
        <BottomTab />
      </View>
    </NativeBaseProvider>
  );
};
