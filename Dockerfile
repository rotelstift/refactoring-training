FROM node:13.7.0

ENV USER rotelstift
ENV HOME /home/${USER}

RUN useradd -m ${USER}
RUN gpasswd -a ${USER} sudo
RUN echo "${USER}:passwd" | chpasswd

USER ${USER}
WORKDIR ${HOME}

RUN yarn add --dev jest

CMD ["/bin/bash"]
