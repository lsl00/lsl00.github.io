<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import '$lib/styles/style.css';
</script>
<svelte:head>
    <title>Shuliang Li's Blog site</title>
</svelte:head>
<Header/>
<main>
    <slot />
</main>