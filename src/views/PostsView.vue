<template>
  <div>
    <h1>Posts</h1>
    <v-text-field
      v-model="searchPost"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
    ></v-text-field>

    <v-data-table
      :items="posts"
      :headers="[
        {
          title: 'Post Title',
          align: 'start',
          sortable: false,
          key: 'title',
        },
        { title: 'Author', key: 'author', align: 'start' },
      ]"
      show-select
      item-value="title"
      v-model="selectedPosts"
      :search="searchPost"
    >
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template #item.title="{ item }">
        <v-dialog fullscreen>
          <template v-slot:activator="{ props: activatorProps }">
            <button v-bind="activatorProps">{{ item.title }}</button>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Edit Post">
              <v-card-text>
                <PostForm ref="postForm" :post="item" />
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>

                <v-btn
                  color="blue"
                  variant="flat"
                  text="Save Post" 
                  @click="$event => 
                    postForm.submit()
                  "
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostForm from "@/components/PostForm.vue";

const posts = ref([
  { title: "Post 1", author: "Alice" },
  { title: "Post 2", author: "Bob" },
  { title: "Post 3", author: "Charlie" },
  { title: "Post 4", author: "David" },
  { title: "Post 5", author: "Eve" },
  { title: "Post 6", author: "Frank" },
  { title: "Post 7", author: "Grace" },
  { title: "Post 8", author: "Henry" },
  { title: "Post 9", author: "Ivy" },
  { title: "Post 10", author: "Jack" },
  { title: "Post 11", author: "Katie" },
  { title: "Post 12", author: "Liam" },
]);

const selectedPosts = ref([]);
const searchPost = ref("");
const postForm = ref();
</script>
