<template>
    <div class="page page--index">

        <!-- <PageFlip /> -->
        <div class="coming-soon-container">
            <!-- <img class="mb-logo" src="@/assets/images/mb-logomark.svg"> -->
            <p class="headline">Welcome to MB's Universe</p>
            <p class="coming-soon">Something big coming up on </p>
            <div class="date-block-row">
                <div class="date-block">
                    <p class="date-block__label">DAY</p>
                    <p class="date-block__box">02</p>
                </div>
                <div class="date-block">
                    <p class="date-block__label">MONTH</p>
                    <p class="date-block__box">NOV</p>
                </div>
                <div class="date-block">
                    <p class="date-block__label">YEAR</p>
                    <p class="date-block__box">2023</p>
                </div>
            </div>

            <p class="stay-tuned">Mark the date & Stay tuned...</p>
            <!-- <p class="coming-soon--date">2<sub>nd</sub> November 2023</p> -->
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" >
.headline {
    font-size: 4rem;
    font-weight: 800;
}

.page--index {
    justify-content: center;
    align-items: center;
}

.mb-logo {
    height: 16vh;
    margin-bottom: 3rem;
}

.coming-soon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin: auto;
    gap: 3rem;
}

.coming-soon {
    margin-top: auto;
    font-size: 2.5rem;
    font-weight: 500;

    &--date {
        font-size: 4rem;
        font-weight: 600;

        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }
    }
}

.date-block-row {
    margin: 1rem 0;
    display: flex;
    gap: 2rem;
}

.date-block {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__label {
        font-size: 2rem;
        letter-spacing: 0.5rem;
        font-weight: 300;
    }

    &__box {
        background-color: white;
        color: black;
        border-radius: 0.5rem;
        font-size: 4rem;
        padding: 1rem 2rem;
        font-weight: 700;
    }
}

.stay-tuned {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.8rem;
}
</style>
