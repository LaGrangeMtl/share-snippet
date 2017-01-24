# share-snippet
Share snippet flexible avec le data qui provient d'un JSON. Assume qu'une App Facebook a été connecté et initialisée auparavant.

---

## Fonctionnement :

* Importer le fichier SCSS dans votre projet : `@import 'path/to/_share-snippet;`
* Importer le JS dans votre projet : `import ShareSnippet from 'path/to/ShareSnippet';`
* Initialiser le JS : `ShareSnippet.init();`
* Intégrer le HTML nécessaire et le contenu en format JSON (instructions suivent).

Le sélecteur CSS pour la création d'un snippet est par défaut `[data-share-snippet]`. Le share-snippet doit être lié à du contenu au moyen d'un id en passant par le dataset `[data-snippet-id]`. Le contenu est lui-même lié au share-snippet de la même façon.

Ainsi donc, on retrouvera un HTML qui ressemble à ceci :

```html
<div class="share-snippet" data-share-snippet data-snippet-id="1">
	<div class="share-snippet-item" data-facebook>
		<i class="icon-facebook"></i>
	</div>
	<div class="share-snippet-item" data-twitter>
		<i class="icon-twitter"></i>
	</div>
	<div class="share-snippet-item" data-linkedin>
		<i class="icon-linkedin"></i>
	</div>
</div>

<script type="application/json" data-share data-snippet-id="1">
	{
		"url": "http://site.ca",
		"name": "Nom de la compagnie / site de provenance",
		"caption": "Titre de la page / article à partager",
		"description": "Description de la page / article à partager",
		"picture": "http://site.com/path/to/image/",
		"twitter": "Texte plus petit pour twitter vu la limite de 140 caractères, facultatif."
	}
</script>
```
