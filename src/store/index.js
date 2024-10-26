import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	state: () => {
		return {
			ID              : null,
            token           : null,
            role            : null,
            nama            : null,
            username        : null,
            whatsapp        : null,
            whatsapp_verified: null,
            email           : null,
            email_verified  : null
		}
	},
	getters : {
		getId       : state => state.ID,
        getToken    : state => state.token,
        getRole     : state => state.role,
        getNama     : state => state.nama,
        getUsername : state => state.username,
        getWhatsapp : state => state.whatsapp,
        getWhatsappVerified : state => state.whatsapp_verified,
        getEmail : state => state.email,
        getEmailVerified : state => state.email_verified,
	},
	actions: {
        setId       (payload) { this.ID = payload },
        setToken    (payload) { this.token = payload },
        setRole     (payload) { this.role = payload },
        setNama     (payload) { this.nama = payload },
        setUsername (payload) { this.username = payload },
        setWhatsapp (payload) { this.email = payload },
        setWhatsappVerified (payload) { this.email_verified = payload },
        setEmail (payload) { this.email = payload },
        setEmailVerified (payload) { this.email_verified = payload },
        
        $reset() {
        	this.ID             = null
            this.token          = null
            this.role           = null
            this.nama           = null
            this.username       = null
            this.whatsapp       = null
            this.whatsapp_verified= null
            this.email          = null
            this.email_verified = null
        }
	},
	persist: true
})
