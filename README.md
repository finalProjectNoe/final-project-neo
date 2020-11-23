# Install

- yarn install

```
yarn install
```

- Chakra ui install

```
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion

```

- Openzeppelin contracts

```
npm install @openzeppelin/contracts
```

# Project Noé

## - Introduction

Dapp basé sur l’identification d’animal (chien / chat / furet)

Fonction:

- Register
- Se log
- Voir ses animaux
- Vétérinaire Add les animaux à un user

1. Le super admin déploie le smart contrat, il peut add/sup un admin, possède la caisse des amendes.

2. Admin add/sup un vétérinaire après vérification auprès de tiers qu’il est bien vétérinaire.

3. Le propriétaire va voir un vétérinaire pour identifier un animal à sa charge.

4. Vétérinaire attribue un animal à un propriétaire enregistré.
   Un animal peut être par défaut acquis, sinon perdu, trouvé, abandonné

5. Un propriétaire paye une amende s'il abandonne un animal et ensuite blacklist de la plateforme
