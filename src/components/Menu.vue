<template>
    <v-container>
        <v-app-bar
        app
        color="primary"
        dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Financeiro</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
        >
            <span class="mr-2">Sair</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://previews.dropbox.com/p/thumb/AAwrwta46rDD2GwvEOnucyAe7Z3VgPZQgT9pmtz7VbC0Jea3UYZ2Gh4Et4498JXYq19Uqb8qCI5ZwtSwn3V8LtFxG16Lbpb72jkEn6-Wj-nA-ID3xsNHhme2TWeVzte22mDBCphprWRBOG91nCZU0e4gJvlCIrUSOW1gFe7ITCIHppZQ6Dhs08-00YoYCxo9ED3VbIWbHPs4N3mcqstxWJiLSuxOzxhYcut44tWr8s0YAkiuC2s9yXCFIoIgY2sf_fnAfR1Za86WT2MlNjwB07B46DcaSd97Y4xHz1VWY0oIcfg4VSr90btR72Mm6z90VzWzGKZr8l98C1iEHTLXW-iV/p.jpeg?fv_content=true&size_mode=5">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Alexandre Melo</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item-group
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Conta</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-currency-usd</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Lançamento</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-note-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Orçamento</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-key-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Palavras-chave</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-file-chart</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Relatórios</v-list-item-title>
                </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
  }),
});
</script>
