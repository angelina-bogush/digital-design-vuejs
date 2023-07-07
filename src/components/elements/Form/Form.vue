<template>
    <div>
        <form class="form" name="editForm" v-bind="$attrs">
            <div class="input-container">
                <label class="form__label" for="name">Название<span>  *</span></label><Input placeholder="Введите текст..." id="name" type="text"
                    class="input-name" :variant="''"></Input>
            </div>
            <div class="input-container">
                <label class="form__label" for="description">Описание</label>
                <Textarea id="description" type="text" placeholder="Введите текст..."></Textarea>
            </div>
        </form>
    </div>

</template>

<script>
export default{
    name: 'Form'
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
.form {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: $gap;
}

.form__label {
    color: $disabled-font-button;
    font-size: 14px;
    width: 120px;
     span{
        color: red
     }
}

.input-container {
    display: flex;
    gap: 8px;
}

.input-name {
    width: calc(100% - 120px)
}
</style>