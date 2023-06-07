<template>
<h2>Demo with One Editor</h2>
<ckeditor :editor="editor" v-model="content" :config="config" />
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import config from '@/CKEditorConfig.js'

export default {
  name: "DemoWithOneEditor",
  data() {
    return {
      editor: ClassicEditor,
      config: config,
      content: "",
    }
  }
}
</script>