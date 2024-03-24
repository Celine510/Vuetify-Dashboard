<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit" ref="formEl">
    <v-row>
      <v-col cols="3">
        <v-switch label="Published" v-model="form.published"></v-switch>
      </v-col>
      <v-col cols="3">
        <v-checkbox indeterminate label="Published" v-model="form.published"></v-checkbox>
      </v-col>
    </v-row>

    <v-text-field v-model="form.title" label="Title" :rules="[isRequired]"></v-text-field>
    <v-combobox
      v-model="form.tags"
      :items="['News', 'Tutorial', 'Event']"
      label="Tags"
      :rules="[isNotEmpty]"
      multiple
      chips
    ></v-combobox>
    <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Upload a Feature Image"
      prepend-icon="mdi-camera"
      label="Feature Image" 
      v-model="form.image"
    ></v-file-input>
    <v-textarea label="Post Body" v-model="form.body"></v-textarea>
    Form is Valid? {{ valid }}

    <button ref="submitBtn" type="submit" class="d-none">Submit</button>
  </v-form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({});
const emit = defineEmits(['submit']);
const form = ref({
  title: "",
  tags: [],
  published: null,
  body: "",
  image: [],
  ...props.post,
});

const valid = ref(true);

function isNotEmpty(value) {
  if(value && value.length) return true
  return 'Please choose at least one option'
}

function isRequired(value) {
  if(value) return true
  return 'Field is required'
}

// simulation: required info from backend
// async function asyncValidation(value) {
//   const res = await fetch(`https://...${value}`)
//   if(res.ok) return true;
//   return 'Bad response'
// }

function handleSubmit() {
  if(!valid.value) return;
  console.log("submitting", form.value);
  emit('submit')
}

const submitBtn = ref();
const submit = () => submitBtn.value.click();

defineExpose({ submit });
</script>
