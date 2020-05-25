import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee; /* Será mostrada esta cor enquanto a imagem estiver sendo carregada */
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

/* Com showsVerticalScrollIndicator: false não será apresentado o indicador de scroll  */
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5; /* Cinza bem fraquinho */
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px; /* Distância dos itens abaixo */
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px; /* Para que seja totalmente arredondado tem que ser a metade do valor dos itens acima */
  background: #eee; /* Fundo cinza enquanto estiver sendo carregado */
`;

export const Info = styled.View`
  margin-left: 10px; /* Distanciamos um pouco da imagem */
  flex: 1; /* Fará com que a informação ocupe todo o espaço disponível do container
              menos 42px de largura (width: 42px) e 10px de margem (margin-left: 10px) */
`;

/* "numberOfLines: 1" define 1 linha para o título do repositório,
   caso o título ocupe mais de uma linha é acrescentado o sinal de reticências */
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
