import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const kosong = () => {
    if (!title || !desc) {
      alert('Harap isi semua kolom');
      return;
    }
    Alert.alert('Submit', 'Apakah anda yakin ingin menambahkan note ini?', [
      {
        text: 'Batal',
        onPress: () => {},
      },
      { text: 'Ya', onPress: () => onSubmit() },
    ]);
  };

  const onSubmit = () => {
    addNote({ title, desc });
    setTitle('');
    setDesc('');
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        label='Judul'
        onChange={setTitle}
        placeholder='Judul'
        numberOfLines={1}
        multiline={false}
      />

      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label='Deskripsi'
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor='#247881'
          color='white'
          text='Simpan'
          width='100%'
          onPress={() => {
            kosong();
          }}
        />
      </View>

      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor='#DDD'
          color='#203239'
          text='Kembali ke Home'
          width='100%'
          onPress={() => {
            setCurrentPage('home');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
