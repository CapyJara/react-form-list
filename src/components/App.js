import React from 'react';
import Colors from './Colors';

export default function App() {
  const colors = [
    { name: 'crimson', hex: '#DC143C', rgb: { red: 220, green: 20, blue: 60 } },
    { name: 'deeppink', hex: '#FF1493', rgb: { red: 255, green: 20, blue: 147 } },
    { name: 'cyan', hex: '#00FFFF', rgb: { red: 0, green: 255, blue: 255 } }
  ];

  return <Colors colors={colors} />;
}
