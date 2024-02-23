import React from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { registerStyles } from "../components/styles/globalStyles";
import { Feather } from "@expo/vector-icons";

const sections = [
  {
    Preferences: { items: ["Language", "Location", "Dark Mode"] },
  },
  {
    Help: { items: ["Report Bugs", "Contact Us"] },
  },
  {
    Content: { items: ["Saved", "Downloads"] },
  },
];

function Settings() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={registerStyles.settingContainer}>
          <TouchableOpacity>
            <View>
              <Image
                source={{
                  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1a692fe-284f-43f5-aebf-d7200e926f79/d8dl679-e92efb56-c459-4251-9f83-5220e33e5433.png/v1/fit/w_828,h_998/sanji_by_phantomred17_d8dl679-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcL2YxYTY5MmZlLTI4NGYtNDNmNS1hZWJmLWQ3MjAwZTkyNmY3OVwvZDhkbDY3OS1lOTJlZmI1Ni1jNDU5LTQyNTEtOWY4My01MjIwZTMzZTU0MzMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3GysdA2ii3V1ivQzchnG__oxiE3ehlijwJ6qoWVPxrI",
                }}
                style={registerStyles.profileAvatar}
              />

              <View style={registerStyles.profileAction}>
                <Feather name="feather" size={15} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={registerStyles.profileName}>Atiku Kantama</Text>
          <View>
            <Text style={registerStyles.profileLocation}>
              21 ladoke akintola Boulevard
            </Text>
          </View>
        </View>

        <View>
          {sections.map((section, index) => (
            <View key={index} style={registerStyles.section}>
              {Object.entries(section).map(([header, items]) => (
                <View key={header}>
                  <Text style={registerStyles.sectionHeader}>{header}</Text>
                  {items.items.map(
                    (
                      item,
                      itemIndex // accessing the 'items' array within each section object
                    ) => (
                      <TouchableOpacity
                        key={itemIndex}
                        style={registerStyles.row}
                      >
                        <Text style={registerStyles.rowLabel}>{item}</Text>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;
