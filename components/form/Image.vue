<template>
	
	<label class="form-label" for="sdlkfjsdaf">
		<span class="form-title">{{ title }}</span>

		<Modal
			v-if="displayLimitModal"
			@close="displayLimitModal = false"
			type="ok"
			heading="Files limit"
		>
			You can to load only no more {{limit}} files
		</Modal>

		<input
			hidden
			class="form-input"
			:class="{'form-input_err': !!error}"
			type="file"
			:name="name+'[]'"
			multiple
			@change="imageAdd($event.target.files)"
			ref="input"
		>
		<div v-if="modelValue !== null" class="form-imagePreview-container">
			<ImagePreview
				v-for="(image, index) in images"
				:src="imageSrc(image)"
				@delete="imageRemove(index)"
			/>
		</div>
		<button
			:class="{'btn-disabled': count >= limitFiles}"
			:disabled="count >= limitFiles"
			@click="$refs.input.click"
			type="button"
			class="btn btn-info form-btn"
		>
			Load image
		</button>

		<span v-if="!!error" class="form-err">{{error}}</span>
	</label>
	
</template>

<script>

import ImagePreview from './ImagePreview.vue';
import Modal from '../Modal.vue';


export default {

	data() {
		return {
			images: this.prepareImages(this.modelValue),
			displayLimitModal: false,
			limitFiles: isNaN(this.limit) ? Infinity : Number(this.limit)
		}
	},

	props: {
		modelValue: [Array, String],
		error: String,

		// fields from backend
		name: String,
		label: String,
		limit: Number
	},

	watch: {
		images(newArr) {
			console.log(newArr)
			this.$emit('update:modelValue', newArr);
		}
	},

	methods: {
		prepareImages(val) {
			if (!val || val.length === 0) {return [];}

			if (!Array.isArray(val)) {
				val = [val];
			}
			if (val[0].file) {
				val = val.map(item => item.file);
			}
			this.$emit('update:modelValue', val);
			return val;
		},
		imageAdd(images) {
			if (this.count >= this.limitFiles) {
				this.displayLimitModal = true;
				return;
			}

			images = Array.from(images).slice(0, this.limitFiles - this.count);
			this.$refs.input.value = null;

			this.images = this.images.concat(images)

		},

		imageRemove(index) {
			this.images.splice(index, 1);
		},

		imageSrc(image) {
			if (typeof image === 'string') {
				if (image.includes('https://')) { return image;}
				return image;
			}
			return URL.createObjectURL(image);
		},

	},

	computed: {
		title() {
			return this.label ? this.label : this.name.charAt(0).toUpperCase() + this.name.slice(1);
		},
		count() {
			return this.images.length;
		}
	},

	components: {
		ImagePreview,
		Modal
	}
}

</script>