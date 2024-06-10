import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, selectedNote, editNote }) => {
  const [title, setTitle] = useState(selectedNote.title || '');
  const [desc, setDesc] = useState(selectedNote.desc || '');

  const onSubmit = () => {
    editNote(selectedNote.id, { title, desc });
    setTitle('');
    setDesc('');
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        label='Judul'
        placeholder='Judul'
        numberOfLines={1}
        multiline={false}
        onChange={setTitle}
      />

      <CustomTextInput
        text={desc}
        label='Deskripsi'
        onChange={setDesc}
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
            onSubmit();
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

export default EditNote;
